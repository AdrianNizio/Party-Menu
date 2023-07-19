import { Component, Inject, OnInit, inject } from '@angular/core';
import { fader } from 'src/app/route-animations';
import { BackendAccessService } from 'src/app/services/backend-access-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cocktail } from 'src/models/cocktail';

@Component({
    animations: [fader],
    selector: 'app-cocktails-menu',
    styleUrls: ['./cocktails-menu.component.scss'],
    templateUrl: './cocktails-menu.component.html',
})
export class CocktailsMenuComponent implements OnInit {
    dialog = inject(MatDialog);
    private backendAccessService = inject(BackendAccessService);
    cocktails: Cocktail[] = [];
    isMixologistMode: boolean = false;

    ngOnInit() {
        this.backendAccessService.getCocktailsMenu().subscribe((cocktails) => {
            this.cocktails = cocktails;
        });
        this.isMixologistMode = true;
    }

    scrollToCocktail(cocktailTitle: string) {
        const cocktailCard = document.getElementById(cocktailTitle);

        if (cocktailCard) {
            cocktailCard.scrollIntoView({ behavior: 'smooth' });
        }
    }

    openShoppingList(): void {
        // eslint-disable-next-line no-use-before-define
        this.dialog.open(ShoppingListDialog, {
            data: this.cocktails,
            width: '400px',
        });
    }
}

interface cocktailsIngredientWithCount {
    name: string;
    count: unknown;
    checked?: boolean;
}
@Component({
    selector: 'app-shopping-list-dialog',
    standalone: true,
    templateUrl: 'shopping-list-dialog.html',
})
export class ShoppingListDialog {
    cocktailsIngredients: cocktailsIngredientWithCount[] = [];
    constructor(public dialogRef: MatDialogRef<ShoppingListDialog>, @Inject(MAT_DIALOG_DATA) data: Cocktail[]) {
        if (sessionStorage.getItem('cocktailsIngredients')) {
            // @ts-ignore
            this.cocktailsIngredients = JSON.parse(sessionStorage.getItem('cocktailsIngredients') || '');
        } else {
            const ingredientsWithCounts: cocktailsIngredientWithCount = {} as cocktailsIngredientWithCount;
            data.forEach((recipe) => {
                recipe.ingredients.forEach((ingredient) => {
                    const ingredientName = ingredient.name;
                    if (Object.values(ingredientsWithCounts).includes(ingredientName)) {
                        // @ts-ignore
                        ingredientsWithCounts[ingredientName]++;
                    } else {
                        // @ts-ignore
                        ingredientsWithCounts[ingredientName] = 1;
                    }
                });
            });

            const ingredientCountArray = Object.entries(ingredientsWithCounts).map(([count, name]) => ({
                count,
                name,
            }));
            this.cocktailsIngredients = ingredientCountArray;
        }
        sessionStorage.setItem('cocktailsIngredients', JSON.stringify(this.cocktailsIngredients));
    }

    saveCheckboxState(ingredientName: string, event: any) {
        const foundObject = this.cocktailsIngredients.find((obj) => obj.name === ingredientName);
        if (foundObject) {
            foundObject.checked = true;
            console.log(event);
            sessionStorage.setItem('cocktailsIngredients', JSON.stringify(this.cocktailsIngredients));
        }
    }
}
