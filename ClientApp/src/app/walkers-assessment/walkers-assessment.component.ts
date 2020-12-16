import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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
    let numberControl = new FormControl(null);
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
