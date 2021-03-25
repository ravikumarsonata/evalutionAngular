import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonControlsRoutingModule } from './common-controls-routing.module';
import { AlertComponent } from './components/alert/alert.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoadingPanelComponent } from './components/loading-panel/loading-panel.component';
import { PopoverComponent } from './components/popover/popover.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TableComponent } from './components/table/table.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [AlertComponent, DialogComponent, LoadingPanelComponent, PopoverComponent, ToggleComponent, TableComponent, SearchComponent],
  imports: [
    CommonModule,
    CommonControlsRoutingModule
  ]
})
export class CommonControlsModule { }
