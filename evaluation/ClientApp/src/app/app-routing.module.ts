import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

   {
    path:"selfassesment",
    loadChildren: () => import('./components/selfassessment/selfassessment.module').then(m => m.SelfassessmentModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
 
{
  path:"mysurvey",
  loadChildren: () => import('./components/mysurveys/mysurveys.module').then(m => m.MysurveysModule)
 
},
{
  path:"assessors",
  loadChildren: () => import('./components/assessors/assessors.module').then(m => m.AssessorsModule)
  
},
{
  path:"stores",
  loadChildren: () => import('./components/stores/stores.module').then(m => m.StoresModule)
  
},
{
  path:"plansandpricing",
  loadChildren: () => import('./components/plansandpricing/plansandpricing.module').then(m => m.PlansandpricingModule)
  
},
{
  path:"newsurvey",
  loadChildren: () => import('./components/newsurvey/newsurvey.module').then(m => m.NewsurveyModule)
  
},
{
  path:"myaccount",
  loadChildren: () => import('./components/myaccount/myaccount.module').then(m => m.MyaccountModule)
  
},
{
  path:"upgrades",
  loadChildren: () => import('./components/upgrade/upgrade.module').then(m => m.UpgradeModule)
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
