import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MysurveysRoutingModule } from './mysurveys-routing.module';
import { MysurveysComponent } from '../mysurveys.component';


@NgModule({
  declarations: [MysurveysComponent],
  imports: [
    CommonModule,
    MysurveysRoutingModule
  ]
})
export class MysurveysModule { }
