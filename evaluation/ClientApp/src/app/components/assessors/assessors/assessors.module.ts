import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessorsRoutingModule } from './assessors-routing.module';
import { AssessorsComponent } from '../assessors.component';


@NgModule({
  declarations: [AssessorsComponent],
  imports: [
    CommonModule,
    AssessorsRoutingModule
  ]
})
export class AssessorsModule { }
