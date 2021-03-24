import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfassessmentRoutingModule } from './selfassessment-routing.module';
import { SelfassessmentComponent } from './selfassessment.component';


@NgModule({
  declarations: [SelfassessmentComponent],
  imports: [
    CommonModule,
    SelfassessmentRoutingModule
  ]
})
export class SelfassessmentModule { }
