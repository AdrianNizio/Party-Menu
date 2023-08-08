import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-ingredients',
    styleUrls: ['./add-ingredients.component.scss'],
    templateUrl: './add-ingredients.component.html',
})
export class AddIngredientsComponent {
    @Input() addNewRecipeForm: FormGroup;
    @Input() isScreenWiderThanMd: boolean;

    constructor(private readonly formBuilder: FormBuilder) {}

    get ingredients(): FormArray<FormGroup> {
        return this.addNewRecipeForm.get('recipeListOfIngredients') as unknown as FormArray;
    }

    addIngredient(): void {
        const newIngredient = this.formBuilder.group({
            ingredient: new FormControl('', Validators.required),
            ingredientType: new FormControl('', Validators.required),
            measurementUnit: new FormControl('', Validators.required),
            quantity: new FormControl('', Validators.required),
        });

        this.ingredients.push(newIngredient);
    }

    removeIngredient(index: number): void {
        this.ingredients.removeAt(index);
    }
}
