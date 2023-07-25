import { Component, Inject, OnInit, inject } from '@angular/core';
import { fader } from 'src/app/route-animations';
import { BackendAccessService } from 'src/app/services/backend-access-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Cocktail } from 'src/app/constants/models/cocktail';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';
import { AppRoutes } from 'src/app/constants/enums/app-routes';

@Component({
    animations: [fader],
    selector: 'app-cocktails-menu',
    styleUrls: ['./cocktails-menu.component.scss'],
    templateUrl: './cocktails-menu.component.html',
})
export class CocktailsMenuComponent implements OnInit {
    dialog = inject(MatDialog);
    route = inject(ActivatedRoute);

    private backendAccessService = inject(BackendAccessService);
    cocktails: Cocktail[] = [];
    isMixologistMode: boolean = false;

    ngOnInit() {
        this.backendAccessService.getCocktailsMenu().subscribe((cocktails) => {
            this.cocktails = cocktails;
        });
        this.route.url.subscribe((segments) => {
            const url = segments.join('/');
            if (url === AppRoutes.Mixologist) {
                this.isMixologistMode = true;
            }
        });
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

type cocktailsIngredientWithCountKeys = 'name' | 'count' | 'checked';
@Component({
    imports: [MatDialogModule, MatButtonModule, MatCheckboxModule, NgFor],
    selector: 'app-shopping-list-dialog',
    standalone: true,
    templateUrl: 'shopping-list-dialog.html',
})
export class ShoppingListDialog implements OnInit {
    cocktailsIngredients: cocktailsIngredientWithCount[] = [];
    constructor(public dialogRef: MatDialogRef<ShoppingListDialog>, @Inject(MAT_DIALOG_DATA) public data: Cocktail[]) {}

    ngOnInit() {
        if (sessionStorage.getItem('cocktailsIngredients')) {
            this.cocktailsIngredients = JSON.parse(sessionStorage.getItem('cocktailsIngredients') || '');
        } else {
            let ingredientsWithCounts: cocktailsIngredientWithCount = {} as cocktailsIngredientWithCount;
            this.countIngredientRepetitions(ingredientsWithCounts);
            this.createArrayOfObjectsFromIngredientCounts(ingredientsWithCounts);
            sessionStorage.setItem('cocktailsIngredients', JSON.stringify(this.cocktailsIngredients));
        }
    }

    countIngredientRepetitions(ingredientsWithCounts: cocktailsIngredientWithCount): cocktailsIngredientWithCount {
        this.data.forEach((recipe) => {
            recipe.ingredients.forEach((ingredient) => {
                const ingredientName = ingredient.name;
                if (Object.keys(ingredientsWithCounts).includes(ingredientName)) {
                    ingredientsWithCounts[ingredientName as cocktailsIngredientWithCountKeys]++;
                } else {
                    // @ts-ignore
                    ingredientsWithCounts[ingredientName] = 1;
                }
            });
        });
        return ingredientsWithCounts;
    }

    createArrayOfObjectsFromIngredientCounts(ingredientsWithCounts: cocktailsIngredientWithCount) {
        const ingredientCountArray = Object.entries(ingredientsWithCounts).map(([count, name]) => ({
            count,
            name,
        }));
        this.cocktailsIngredients = ingredientCountArray;
    }

    saveCheckboxState(ingredientName: string, event: MatCheckboxChange) {
        const foundObject = this.cocktailsIngredients.find((obj) => obj.name === ingredientName);
        if (foundObject) {
            foundObject.checked = event.checked;
            sessionStorage.setItem('cocktailsIngredients', JSON.stringify(this.cocktailsIngredients));
        }
    }
}
