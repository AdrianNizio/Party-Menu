import { Component, Inject, OnInit, inject } from '@angular/core';
import { fader } from 'src/app/route-animations';
import { BackendAccessService } from 'src/app/services/backend-access-service.service';
import { MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cocktail } from 'src/models/cocktail';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  animations: [fader],
  selector: 'app-cocktails-menu',
  templateUrl: './cocktails-menu.component.html',
  styleUrls: ['./cocktails-menu.component.scss']
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
    this.dialog.open(ShoppingListDialog, {
      width: '400px',
      data: this.cocktails
    });
  }
}



interface cocktailsIngredientWithCount { name: string; count: unknown; checked?: boolean }
@Component({
  selector: 'shopping-list-dialog',
  templateUrl: 'shopping-list-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCheckboxModule, NgFor],
})
export class ShoppingListDialog {
  cocktailsIngredients: cocktailsIngredientWithCount[] = [];
  constructor(public dialogRef: MatDialogRef<ShoppingListDialog>, @Inject(MAT_DIALOG_DATA) data: Cocktail[]) {
    if (sessionStorage.getItem("cocktailsIngredients")) {
      // @ts-ignore
      this.cocktailsIngredients = JSON.parse(sessionStorage.getItem("cocktailsIngredients"));
    } else {
      const ingredientsWithCounts = {};
      data.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
          const ingredientName = ingredient.name;
          if (ingredientsWithCounts.hasOwnProperty(ingredientName)) {
            // @ts-ignore
            ingredientsWithCounts[ingredientName]++;
          } else {
            // @ts-ignore
            ingredientsWithCounts[ingredientName] = 1;
          }
        });
      });

      const ingredientCountArray = Object.entries(ingredientsWithCounts).map(([name, count]) => ({
        name,
        count
      }));
      this.cocktailsIngredients = ingredientCountArray;
    }
    sessionStorage.setItem("cocktailsIngredients", JSON.stringify(this.cocktailsIngredients));
  }

  saveCheckboxState(ingredientName: string, event: any) {
    const foundObject = this.cocktailsIngredients.find(obj => obj.name === ingredientName);
    if (foundObject) {
      foundObject.checked = true;
      sessionStorage.setItem("cocktailsIngredients", JSON.stringify(this.cocktailsIngredients));
    }
  }
}