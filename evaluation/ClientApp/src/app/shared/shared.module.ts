import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { AlertComponent } from './components/alert/alert.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoadingPanelComponent } from './components/loading-panel/loading-panel.component';
import { PopoverComponent } from './components/popover/popover.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TableComponent } from './components/table/table.component';
import { SearchComponent } from './components/search/search.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TabsComponent } from './components/tabs/tabs.component';




import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AlertComponent, DialogComponent, LoadingPanelComponent, PopoverComponent, ToggleComponent, SearchComponent, BreadcrumbComponent, TabsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    MaterialModule
    
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
