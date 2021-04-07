import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    MaterialModule,
    QuestionnaireRoutingModule
  ]
})
export class QuestionnaireModule { }
