import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MysurveysRoutingModule } from './mysurveys-routing.module';
import { MysurveysComponent } from './mysurveys.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [MysurveysComponent],
  imports: [
    CommonModule,
    MysurveysRoutingModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ]
})
export class MysurveysModule { }
