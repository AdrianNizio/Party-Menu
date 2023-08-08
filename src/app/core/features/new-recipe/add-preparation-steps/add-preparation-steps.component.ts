import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-preparation-preparation-steps',
    styleUrls: ['./add-preparation-steps.component.scss'],
    templateUrl: './add-preparation-steps.component.html',
})
export class AddPreparationStepsComponent {
    @Input() addNewRecipeForm: FormGroup;
    @Input() isScreenWiderThanMd: boolean;

    constructor(private readonly formBuilder: FormBuilder) {}

    get preparationSteps(): FormArray<FormGroup> {
        return this.addNewRecipeForm.get('recipeListOfPreparationSteps') as unknown as FormArray;
    }

    addPreparationStep(): void {
        const newPreparationSteps = this.formBuilder.group({
            preparationStep: new FormControl('', Validators.required),
        });

        this.preparationSteps.push(newPreparationSteps);
    }

    removePreparationStep(index: number): void {
        this.preparationSteps.removeAt(index);
    }
}
