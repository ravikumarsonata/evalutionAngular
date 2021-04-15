import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  public showquestion: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  //editquestion() {
  //  alert('test');
 
  //}
  showquestionmethod() {

    this.showquestion = false;
  }
  focusout() {
  /*  alert('row');*/
    this.showquestion = true;
  }
 

}
