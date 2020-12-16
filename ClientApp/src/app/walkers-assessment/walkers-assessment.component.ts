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
  weekDay;
  pageNumbers;
  page;

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

  getPage(page) {
    this.page = page;
    this.pageNumbers = this.numbers.slice((page - 1) * 20, page * 20);
  }

  onSubmit(data) {
    if(this.walkersAssessmentForm.valid) {
      //I calculate this on the submit in case the page has been opened for a while
      this.weekDay = new Date().getDay();

      var walkersAssessmentHelper = new WalkersAssessmentHelper();
      this.numbers = walkersAssessmentHelper.countTo(data.number);
      this.getPage(1);
    }
  }
}
