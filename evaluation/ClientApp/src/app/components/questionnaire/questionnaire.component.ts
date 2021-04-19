import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { QuestiontypesService } from './questiontypes/questiontypes.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {


  constructor(public questiontypesservice: QuestiontypesService) { }
  ngOnInit() {

  }
  public questiontype = [
    {
      "image": "rirani",
      "questiontypelabel": "Multiple Choice",
      "questiontype": "multiplechoice",

    },
    {
      "image": "rirani",
      "questiontypelabel": "Radio Button",
      "questiontype": "radio",

    },
    {
      "image": "rirani",
      "questiontypelabel": "Dropdown",
      "questiontype": "dropdown",

    }
    ,
    {
      "image": "rirani",
      "questiontypelabel": "Email",
      "questiontype": "email",

    }
    ,
    {
      "image": "rirani",
      "questiontypelabel": "Open Slider",
      "questiontype": "openslider",

    }
    ,
    {
      "image": "rirani",
      "questiontypelabel": "Phone",
      "questiontype": "phone",

    }
    ,
    {
      "image": "rirani",
      "questiontypelabel": "Date/Time",
      "questiontype": "phone",

    }
    ,
    {
      "image": "rirani",
      "questiontypelabel": "Image Choice",
      "questiontype": "phone",

    }
  ]
  public result:any;
  showquestiontype(questiontype: any) {
    this.result = this.questiontypesservice.getquestiontype(questiontype.questiontype);

  }
}
