import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns = ['title', 'modified', 'response', 'symbol', 'share', 'analyze', 'more'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface Element {
  modified: string;
  title: string;
  response: string;
  symbol: string;
  share: string;
  analyze: string;
  more: string;
}

const ELEMENT_DATA: Element[] = [
  { title: 'GBW Demo Campaign', modified: '15/07/2020', response: '485', symbol: '', share: '', analyze: '', more: '' },
  { title: 'GBW Test Campaign', modified: '05/07/2020', response: '482', symbol: '', share: '', analyze: '', more: '' },
  { title: 'GBW Test', modified: '01/07/2020', response: 'draft', symbol: '', share: '', analyze: '', more: '' },
  { title: '4', modified: 'Beryllium', response: '9.0122', symbol: '', share: '', analyze: '', more: '' },
  { title: '5', modified: 'Boron', response: '10.811', symbol: '', share: '', analyze: '', more: '' },
  { title: '6', modified: 'Carbon', response: '12.0107', symbol: '', share: '', analyze: '', more: '' },
  { title: '7', modified: 'Nitrogen', response: '14.0067', symbol: '', share: '', analyze: '', more: '' },
  { title: '8', modified: 'Oxygen', response: '15.9994', symbol: '', share: '', analyze: '', more: '' },
  { title: '9', modified: 'Fluorine', response: '18.9984', symbol: '', share: '', analyze: '', more: 'm' },
  { title: '10', modified: 'Neon', response: '20.1797', symbol: '', share: '', analyze: '', more: '' },
  { title: '11', modified: 'Sodium', response: '22.9897', symbol: '', share: '', analyze: '', more: '' },
  { title: '12', modified: 'Magnesium', response: '24.305', symbol: '', share: '', analyze: '', more: '' },
  { title: '13', modified: 'Aluminum', response: '26.9815', symbol: '', share: '', analyze: '', more: '' },
  { title: '14', modified: 'Silicon', response: '28.0855', symbol: '', share: '', analyze: '', more: '' },
  { title: '15', modified: 'Phosphorus', response: '30.9738', symbol: '', share: '', analyze: '', more: '' },
  { title: '16', modified: 'Sulfur', response: '32.065', symbol: '', share: '', analyze: '', more: '' },
  { title: '17', modified: 'Chlorine', response: '35.453', symbol: '', share: '', analyze: '', more: '' },
  { title: '18', modified: 'Argon', response: '39.948', symbol: '', share: '', analyze: '', more: '' },
  { title: '19', modified: 'Potassium', response: '39.0983', symbol: '', share: '', analyze: '', more: '' },
  { title: '20', modified: 'Calcium', response: '40.078', symbol: '', share: '', analyze: '', more: '' },
];
