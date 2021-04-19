import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-questiontypes',
  templateUrl: './questiontypes.component.html',
  styleUrls: ['./questiontypes.component.css']
})
export class QuestiontypesComponent implements OnInit {

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

  showmultiple() {
    this.showDate = false;
    this.showShort = false;
    this.showLong = false;
    this.showSliderLabel = false;
    this.showmultiplechoiselabel = true;
    this.showradiobuttonlabel = false;
    this.showYesNo = false;
    this.showDropdownLabel = false;
  }
  showradio() {
    this.showDate = false;
    this.showShort = false;
    this.showLong = false;
    this.showSliderLabel = false;
    this.showradiobuttonlabel = true;
    this.showmultiplechoiselabel = false;
    this.showYesNo = false;
    this.showDropdownLabel = false;
  }
  showYesNO() {
    this.showDate = false;
    this.showShort = false;
    this.showLong = false;
    this.showSliderLabel = false;
    this.showYesNo = true;
    this.showradiobuttonlabel = false;
    this.showmultiplechoiselabel = false;
    this.showDropdownLabel = false;
  }
  showDropdown() {
    this.showDate = false;
    this.showShort = false;
    this.showLong = false;
    this.showSliderLabel = false;
    this.showDropdownLabel = true;
    this.showYesNo = false;
    this.showradiobuttonlabel = false;
    this.showmultiplechoiselabel = false;
  }

  showSlider() {
    this.showDate = false;
    this.showShort = false;
    this.showLong = false;
    this.showSliderLabel = true;
    this.showDropdownLabel = false;
    this.showYesNo = false;
    this.showradiobuttonlabel = false;
    this.showmultiplechoiselabel = false;
  }
  showLongText() {
    this.showDate = false;
    this.showLong = true;
    this.showShort = false;
    this.showSliderLabel = false;
    this.showDropdownLabel = false;
    this.showYesNo = false;
    this.showradiobuttonlabel = false;
    this.showmultiplechoiselabel = false;
  }
  showShortText() {
    this.showDate = false;
    this.showShort = true;
    this.showLong = false;
    this.showSliderLabel = false;
    this.showDropdownLabel = false;
    this.showYesNo = false;
    this.showradiobuttonlabel = false;
    this.showmultiplechoiselabel = false;
  }
  showDateTime() {
    this.showDate = true;
    this.showShort = false;
    this.showLong = false;
    this.showSliderLabel = false;
    this.showDropdownLabel = false;
    this.showYesNo = false;
    this.showradiobuttonlabel = false;
    this.showmultiplechoiselabel = false;
  }
  showquestionmethod() {

    this.showquestion = false;
  }
  focusout() {
    /*  alert('row');*/
    this.showquestion = true;
  }

}
