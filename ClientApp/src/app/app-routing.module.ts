import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessorsComponent } from 'components/assessors/assessors.component';
import { MysurveysComponent } from 'components/mysurveys/mysurveys.component';
import { NewsurveyComponent } from 'components/newsurvey/newsurvey.component';
import { PlansandpricingComponent } from 'components/plansandpricing/plansandpricing.component';
import { SelfassessmentComponent } from 'components/selfassessment/selfassessment.component';
import { StoresComponent } from 'components/stores/stores.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MySurveyComponent } from './my-survey/my-survey.component';

const routes: Routes = [
  {
    path:"selfassesment",
    component:SelfassessmentComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
},
{
  path:"survey",
  component:MySurveyComponent
},
{
  path:"assessors",
  component: AssessorsComponent
},
{
  path:"stores",
  component:StoresComponent
},
{
  path:"plansandpricing",
  component:PlansandpricingComponent
},
{
  path:"newSurvey",
  component:NewsurveyComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[MySurveyComponent,DashboardComponent]
})
export class AppRoutingModule { }
