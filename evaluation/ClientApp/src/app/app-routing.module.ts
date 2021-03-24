import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
   {
    path:"selfassesment",
    loadChildren: () => import('./components/selfassessment/selfassessment/selfassessment.module').then(m => m.SelfassessmentModule)
  },
  {
    path:"base",
    loadChildren: () => import('./components/base/base/base.module').then(m => m.BaseModule)
 
},
{
  path:"survey",
  loadChildren: () => import('./components/mysurveys/mysurveys/mysurveys.module').then(m => m.MysurveysModule)
 
},
{
  path:"assessors",
  loadChildren: () => import('./components/assessors/assessors/assessors.module').then(m => m.AssessorsModule)
  
},
{
  path:"stores",
  loadChildren: () => import('./components/stores/stores/stores.module').then(m => m.StoresModule)
  
},
{
  path:"plansandpricing",
  loadChildren: () => import('./components/plansandpricing/plansandpricing/plansandpricing.module').then(m => m.PlansandpricingModule)
  
},
{
  path:"newSurvey",
  loadChildren: () => import('./components/newsurvey/newsurvey/newsurvey.module').then(m => m.NewsurveyModule)
  
},
{
  path:"myaccount",
  loadChildren: () => import('./components/myaccount/myaccount/myaccount.module').then(m => m.MyaccountModule)
  
},
{
  path:"upgrade",
  loadChildren: () => import('./components/upgrade/upgrade/upgrade.module').then(m => m.UpgradeModule)
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
