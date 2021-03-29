import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedRoutingModule } from '../../shared/shared-routing.module';





@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
