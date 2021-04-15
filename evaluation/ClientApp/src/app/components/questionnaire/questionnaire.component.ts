import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  public showquestion: boolean = true;
  public showmultiplechoiselabel: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  //editquestion() {
  //  alert('test');
 
  //}

  showmultiple() {

    this.showmultiplechoiselabel = true;
  }
  showquestionmethod() {

    this.showquestion = false;
  }
  focusout() {
  /*  alert('row');*/
    this.showquestion = true;
  }
 

}
