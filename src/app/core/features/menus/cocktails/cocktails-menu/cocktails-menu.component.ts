import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/enums/app-routes';
import { BackendAccessService } from 'src/app/shared/services/backend-access-service.service';
import { Cocktail } from 'src/app/shared/constants/models/cocktail';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { fader } from 'src/app/route-animations';
@Component({
    animations: [fader],
    selector: 'app-cocktails-menu',
    styleUrls: ['./cocktails-menu.component.scss'],
    templateUrl: './cocktails-menu.component.html',
})
export class CocktailsMenuComponent implements OnInit {
    dialog = inject(MatDialog);
    route = inject(ActivatedRoute);
    cocktails: Cocktail[] = [];
    isMixologistMode: boolean = false;

    private readonly backendAccessService = inject(BackendAccessService);

    ngOnInit(): void {
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

    scrollToCocktail(cocktailTitle: string): void {
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

type cocktailsIngredientWithCountKeys = 'checked' | 'count' | 'name';
@Component({
    imports: [MatDialogModule, MatButtonModule, MatCheckboxModule, NgFor],
    selector: 'app-shopping-list-dialog',
    standalone: true,
    templateUrl: 'shopping-list-dialog.html',
})
export class ShoppingListDialog implements OnInit {
    cocktailsIngredients: cocktailsIngredientWithCount[] = [];
    constructor(public dialogRef: MatDialogRef<ShoppingListDialog>, @Inject(MAT_DIALOG_DATA) public data: Cocktail[]) {}

    ngOnInit(): void {
        if (sessionStorage.getItem('cocktailsIngredients')) {
            this.cocktailsIngredients = JSON.parse(sessionStorage.getItem('cocktailsIngredients') || '');
        } else {
            const ingredientsWithCounts: cocktailsIngredientWithCount = {} as cocktailsIngredientWithCount;
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

    createArrayOfObjectsFromIngredientCounts(ingredientsWithCounts: cocktailsIngredientWithCount): void {
        const ingredientCountArray = Object.entries(ingredientsWithCounts).map(([count, name]) => ({
            count,
            name,
        }));
        this.cocktailsIngredients = ingredientCountArray;
    }

    saveCheckboxState(ingredientName: string, event: MatCheckboxChange): void {
        const foundObject = this.cocktailsIngredients.find((obj) => obj.name === ingredientName);
        if (foundObject) {
            foundObject.checked = event.checked;
            sessionStorage.setItem('cocktailsIngredients', JSON.stringify(this.cocktailsIngredients));
        }
    }
}
