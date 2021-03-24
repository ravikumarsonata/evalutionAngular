import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsurveyRoutingModule } from './newsurvey-routing.module';
import { NewsurveyComponent } from './newsurvey.component';


@NgModule({
  declarations: [NewsurveyComponent],
  imports: [
    CommonModule,
    NewsurveyRoutingModule
  ]
})
export class NewsurveyModule { }
