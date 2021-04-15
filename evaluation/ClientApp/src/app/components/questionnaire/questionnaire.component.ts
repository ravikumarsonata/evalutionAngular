import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  public showquestion: boolean = true;
  public showmultiplechoiselabel: boolean = false;
  public showradiobuttonlabel: boolean = false;
  
  
  constructor(public dialog: MatDialog) { }

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

    this.showmultiplechoiselabel = true;
    this.showradiobuttonlabel = false;
  }
  showradio() {
    this.showradiobuttonlabel = true;
    this.showmultiplechoiselabel = false;
  }
  showquestionmethod() {

    this.showquestion = false;
  }
  focusout() {
  /*  alert('row');*/
    this.showquestion = true;
  }
 
  //delete() {
  //  alert('delete');
  //}
}
