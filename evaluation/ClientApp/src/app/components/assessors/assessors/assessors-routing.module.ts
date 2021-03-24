import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessorsComponent } from '../assessors.component';

const routes: Routes = [
  {
    path: '',
    component: AssessorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessorsRoutingModule { }
