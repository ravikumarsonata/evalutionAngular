import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfassessmentComponent } from './selfassessment.component';

const routes: Routes = [
  {
    path: '',
    component: SelfassessmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfassessmentRoutingModule { }
