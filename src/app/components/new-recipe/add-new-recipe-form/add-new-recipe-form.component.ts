import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-add-new-recipe-form',
    styleUrls: ['./add-new-recipe-form.component.scss'],
    templateUrl: './add-new-recipe-form.component.html',
})
export class AddNewRecipeFormComponent {
    ingredientForm = new FormGroup({
        recipeGarnish: new FormControl(''),
        recipeGlassPlate: new FormControl(''),
        recipeListOfIngredients: new FormArray([]),
        recipeNotes: new FormControl(''),
        recipePictureForCreator: new FormControl(''),
        recipePictureForGuests: new FormControl(''),
        recipeProcess: new FormControl(''),
        recipeTitle: new FormControl(''),
    });

    constructor(private formBuilder: FormBuilder) {}

    get ingredients() {
        return this.ingredientForm.get('recipeListOfIngredients') as unknown as FormArray;
    }

    addIngredient() {
        const newIngredient = this.formBuilder.group({
            ingredient: new FormControl(''),
            measurementUnit: new FormControl(''),
            quantity: new FormControl(''),
        });

        this.ingredients.push(newIngredient);
    }

    removeIngredient(index: number) {
        this.ingredients.removeAt(index);
    }
}
