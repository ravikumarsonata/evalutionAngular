import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { SharedRoutingModule } from '../../shared-routing.module';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SharedModule } from '../../shared.module';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableRoutingModule,
   
   
  ]
})
export class TableModule { }
