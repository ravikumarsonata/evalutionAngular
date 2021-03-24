import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsurveyComponent } from '../newsurvey.component';

const routes: Routes = [
  {
    path: '',
    component: NewsurveyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsurveyRoutingModule { }
