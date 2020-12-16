import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WalkersAssessmentComponent } from './walkers-assessment/walkers-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    WalkersAssessmentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }