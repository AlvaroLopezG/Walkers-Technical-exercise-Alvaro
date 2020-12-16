import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { isNotANumberValidator, isNotAWholeNumberValidator } from '../validators/numeric-validators';
import { WalkersAssessmentHelper } from './walkers-assessment.helper';

@Component({
  selector: 'app-walkers-assessment',
  templateUrl: './walkers-assessment.component.html',
  styleUrls: ['./walkers-assessment.component.css']
})
export class WalkersAssessmentComponent {
  walkersAssessmentForm;
  numbers;

  constructor(
    private formBuilder: FormBuilder
  ) {
    let numberControl = new FormControl(
      null,
      [
        Validators.required,
        isNotANumberValidator(),
        Validators.min(1),
        Validators.max(200),
        isNotAWholeNumberValidator()
      ]
    );
    this.walkersAssessmentForm = this.formBuilder.group({
      number: numberControl
    });
  }

  onSubmit(data) {
    if(this.walkersAssessmentForm.valid) {
      var walkersAssessmentHelper = new WalkersAssessmentHelper();
      this.numbers = walkersAssessmentHelper.countTo(data.number);
    }
  }
}
