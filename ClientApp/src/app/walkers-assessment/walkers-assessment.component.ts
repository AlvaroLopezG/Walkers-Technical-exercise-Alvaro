import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-walkers-assessment',
  templateUrl: './walkers-assessment.component.html',
  styleUrls: ['./walkers-assessment.component.css']
})
export class WalkersAssessmentComponent {
  walkersAssessmentForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    let numberControl = new FormControl(null);
    this.walkersAssessmentForm = this.formBuilder.group({
      number: numberControl
    });
  }

  onSubmit(data) {
    console.log(data);
  }
}
