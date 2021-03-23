import { Component } from '@angular/core';
import { MySurveyComponent } from './my-survey/my-survey.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eValuate';
}
