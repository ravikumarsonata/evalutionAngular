import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-questionpreview',
  templateUrl: './questionpreview.component.html',
  styleUrls: ['./questionpreview.component.css']
})
export class QuestionpreviewComponent implements OnInit {


  public showquestion: boolean = true;
  public showmultiplechoiselabel: boolean = false;
  public showradiobuttonlabel: boolean = false;
  public showYesNo = false;
  public showDropdownLabel = false;
  public showSliderLabel = false;
  public showLong = false;
  public showShort = false;
  public showDate = false;

  constructor(public dialog: MatDialog) { }
  items = [
    { value: 'I can be dragged', disabled: false },
    { value: 'I cannot be dragged', disabled: true },
    { value: 'I can also be dragged', disabled: false }
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //editquestion() {
  //  alert('test');

  //}


  focusout() {
    /*  alert('row');*/
    this.showquestion = true;
  }

  //delete() {
  //  alert('delete');
  //}

}
