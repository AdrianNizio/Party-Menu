import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { BreakpointObserverService } from 'src/app/shared/services/breakpoint-observer.service';

@Component({
    selector: 'app-add-new-recipe-form',
    styleUrls: ['./add-new-recipe-form.component.scss'],
    templateUrl: './add-new-recipe-form.component.html',
})
export class AddNewRecipeFormComponent implements OnInit {
    @ViewChild('stepper') myStepper: MatStepper;
    private breakpointObserverService = inject(BreakpointObserverService);

    isScreenWiderThanMd: boolean = true;

    addNewRecipeForm = new FormGroup({
        recipeGarnish: new FormControl('', Validators.required),
        recipeGlassPlate: new FormControl('', Validators.required),
        recipeListOfIngredients: new FormArray([], Validators.required),
        recipeListOfPreparationSteps: new FormArray([], Validators.required),
        recipeNotes: new FormControl('', Validators.required),
        recipePictureForCreator: new FormControl('', Validators.required),
        recipePictureForGuests: new FormControl('', Validators.required),
        recipeTitle: new FormControl('', Validators.required),
    });

    ngOnInit() {
        this.breakpointObserverService.getMediumBreakpoint().subscribe((value) => {
            this.isScreenWiderThanMd = value;
        });
    }

    stepperTriggerPrevious() {
        this.myStepper.previous();
    }

    stepperTriggerNext() {
        this.myStepper.next();
    }

    submitForm() {
        console.log(this.addNewRecipeForm);
    }
}
