import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserverService } from 'src/app/shared/services/breakpoint-observer.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
    selector: 'app-add-new-recipe-form',
    styleUrls: ['./add-new-recipe-form.component.scss'],
    templateUrl: './add-new-recipe-form.component.html',
})
export class AddNewRecipeFormComponent implements OnInit {
    @ViewChild('stepper') myStepper: MatStepper;

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

    private readonly breakpointObserverService = inject(BreakpointObserverService);

    ngOnInit(): void {
        this.breakpointObserverService.getMediumBreakpoint().subscribe((value) => {
            this.isScreenWiderThanMd = value;
        });
    }

    stepperTriggerPrevious(): void {
        this.myStepper.previous();
    }

    stepperTriggerNext(): void {
        this.myStepper.next();
    }

    submitForm(): void {
        console.log(this.addNewRecipeForm);
    }
}
