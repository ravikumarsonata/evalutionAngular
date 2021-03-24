import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MysurveysComponent } from '../mysurveys.component';

const routes: Routes = [
  {
    path: '',
    component: MysurveysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MysurveysRoutingModule { }
