import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { isNotANumberValidator, isNotAWholeNumberValidator } from '../validators/numeric-validators';
import { WalkersAssessmentHelperAPI, WalkersAssessmentHelperLocal } from './walkers-assessment.helper';

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
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    let useLocalControl = new FormControl(true);
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
      number: numberControl,
      useLocal: useLocalControl
    });
  }

  getPage(page) {
    this.page = page;
    this.pageNumbers = this.numbers.slice((page - 1) * 20, page * 20);
  }

  onSubmit(data) {
    if (this.walkersAssessmentForm.valid) {
      //I calculate this on the submit in case the page has been opened for a while
      this.weekDay = new Date().getDay();
      var walkersAssessmentHelper;
      if (data.useLocal) {
        walkersAssessmentHelper = new WalkersAssessmentHelperLocal();
      } else {
        walkersAssessmentHelper = new WalkersAssessmentHelperAPI(this.http);
      }
      walkersAssessmentHelper.countTo(data.number)
        .then(result => {
          this.numbers = result;
          this.getPage(1);
        })

    }
  }
}
