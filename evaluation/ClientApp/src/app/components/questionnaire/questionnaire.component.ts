import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { QuestiontypesService } from './questiontypes/questiontypes.service';
import { QuestionnaireService } from './questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  public result: any;
  public questiontype: any;
  public questiontypelabel:any;

  constructor(public questiontypesservice: QuestiontypesService, public questiontypes: QuestionnaireService) { }
  ngOnInit() {
    debugger;

    this.questiontypes.getData().subscribe(data => {
      debugger;
      console.log(data);
      debugger;
      this.questiontype = data

    });
  }
  //public questiontype = [
  //  {
  //    "image": "rirani",
  //    "questiontypelabel": "Multiple Choice",
  //    "questiontype": "multiplechoice",

  //  },
  //  {
  //    "image": "rirani",
  //    "questiontypelabel": "Radio Button",
  //    "questiontype": "radio",

  //  },
  //  {
  //    "image": "rirani",
  //    "questiontypelabel": "Dropdown",
  //    "questiontype": "dropdown",

  //  }
  //  ,
  //  {
  //    "image": "rirani",
  //    "questiontypelabel": "Email",
  //    "questiontype": "email",

  //  }
  //  ,
  //  {
  //    "image": "rirani",
  //    "questiontypelabel": "Open Slider",
  //    "questiontype": "openslider",

  //  }
  //  ,
  //  {
  //    "image": "rirani",
  //    "questiontypelabel": "Phone",
  //    "questiontype": "phone",

  //  }
  //  ,
  //  {
  //    "image": "rirani",
  //    "questiontypelabel": "Date/Time",
  //    "questiontype": "phone",

  //  }
  //  ,
  //  {
  //    "image": "rirani",
  //    "questiontypelabel": "Image Choice",
  //    "questiontype": "phone",

  //  }
  //]

  showquestiontype(questiontype: any) {


    this.result = this.questiontypesservice.getquestiontype(questiontype.questiontype);

  }


  questioneventtype(event:any) {


    this.questiontypelabel = event.response_Type_Value;
  }
}
