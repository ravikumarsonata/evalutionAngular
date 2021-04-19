import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';
import { MaterialModule } from '../../material/material.module';
import { QuestiontypesComponent } from './questiontypes/questiontypes.component';
import { QuestionbuilderComponent } from './questionbuilder/questionbuilder.component';
import { QuestionpreviewComponent } from './questionpreview/questionpreview.component';


@NgModule({
  declarations: [QuestionnaireComponent, QuestiontypesComponent, QuestionbuilderComponent, QuestionpreviewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    QuestionnaireRoutingModule
  ]
})
export class QuestionnaireModule { }
