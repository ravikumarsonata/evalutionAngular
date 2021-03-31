import { Component } from '@angular/core';
import { Event,NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
//import { MySurveyComponent } from './my-survey/my-survey.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoadingIndiator = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndiator = true;
      }
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        this.showLoadingIndiator = false;
      }
    });
  }

}
