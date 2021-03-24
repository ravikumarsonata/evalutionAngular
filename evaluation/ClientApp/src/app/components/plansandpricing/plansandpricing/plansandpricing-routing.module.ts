import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansandpricingComponent } from '../plansandpricing.component';

const routes: Routes = [
  {
    path: '',
    component: PlansandpricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansandpricingRoutingModule { }
