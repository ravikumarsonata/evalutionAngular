import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MysurveysRoutingModule } from './mysurveys-routing.module';
import { MysurveysComponent } from './mysurveys.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [MysurveysComponent],
  imports: [
    CommonModule,
    MysurveysRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class MysurveysModule { }
