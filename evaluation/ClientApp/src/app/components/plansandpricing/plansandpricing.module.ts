import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansandpricingRoutingModule } from './plansandpricing-routing.module';
import { PlansandpricingComponent } from './plansandpricing.component';


@NgModule({
  declarations: [PlansandpricingComponent],
  imports: [
    CommonModule,
    PlansandpricingRoutingModule
  ]
})
export class PlansandpricingModule { }
