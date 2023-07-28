import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
    selector: 'app-add-preparation-preparation-steps',
    styleUrls: ['./add-preparation-steps.component.scss'],
    templateUrl: './add-preparation-steps.component.html',
})
export class AddPreparationStepsComponent {
    @Input() addNewRecipeForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    get preparationSteps() {
        return this.addNewRecipeForm.get('recipeListOfPreparationSteps') as unknown as FormArray;
    }

    addPreparationStep() {
        const newPreparationSteps = this.formBuilder.group({
            preparationStep: new FormControl(''),
        });

        this.preparationSteps.push(newPreparationSteps);
    }

    removePreparationStep(index: number) {
        this.preparationSteps.removeAt(index);
    }
}
