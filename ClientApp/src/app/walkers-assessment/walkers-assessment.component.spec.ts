import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkersAssessmentComponent } from './walkers-assessment.component';

describe('WalkersAssessmentComponent', () => {
  let component: WalkersAssessmentComponent;
  let fixture: ComponentFixture<WalkersAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkersAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkersAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
