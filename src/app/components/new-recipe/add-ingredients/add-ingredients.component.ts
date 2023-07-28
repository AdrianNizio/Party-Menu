import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-ingredients',
    styleUrls: ['./add-ingredients.component.scss'],
    templateUrl: './add-ingredients.component.html',
})
export class AddIngredientsComponent {
    @Input() addNewRecipeForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    get ingredients() {
        return this.addNewRecipeForm.get('recipeListOfIngredients') as unknown as FormArray;
    }

    addIngredient() {
        const newIngredient = this.formBuilder.group({
            ingredient: new FormControl(''),
            ingredientType: new FormControl(''),
            measurementUnit: new FormControl(''),
            quantity: new FormControl(''),
        });

        this.ingredients.push(newIngredient);
    }

    removeIngredient(index: number) {
        this.ingredients.removeAt(index);
    }
}
