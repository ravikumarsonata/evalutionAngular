import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { MaterialModule } from '../../material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MaterialModule,
    SharedModule

  ]
})
export class HeaderModule { }
