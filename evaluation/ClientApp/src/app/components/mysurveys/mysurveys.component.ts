import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MysurveysService } from './mysurveys.service';

@Component({
  selector: 'app-mysurveys',
  templateUrl: './mysurveys.component.html',
  styleUrls: ['./mysurveys.component.css'],
  providers: [MysurveysService]
})
export class MysurveysComponent implements OnInit {
  constructor(public dialog: MatDialog, public employee: MysurveysService) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  employeedata :any;
  ngOnInit() {
    this.employee.getData().subscribe(data => this.employeedata = data);
  }

}
