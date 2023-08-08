import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPreparationStepsComponent } from './add-preparation-steps.component';

describe('AddPreparationStepsComponent', () => {
  let component: AddPreparationStepsComponent;
  let fixture: ComponentFixture<AddPreparationStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPreparationStepsComponent]
    });
    fixture = TestBed.createComponent(AddPreparationStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
