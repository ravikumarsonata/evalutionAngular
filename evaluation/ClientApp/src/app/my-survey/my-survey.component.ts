import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-survey',
  templateUrl: './my-survey.component.html',
  styleUrls: ['./my-survey.component.css']
})
export class MySurveyComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Modified', 'Response','Design','Share','Analyse'];
  constructor() { }

  ngOnInit(): void {
  }

}
