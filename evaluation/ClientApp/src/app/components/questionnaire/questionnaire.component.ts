import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  showquestion: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  showquestionnair() {
    const dialogRef = this.dialog.open(DialogComponent);
    debugger;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
   /* this.showquestion = true;*/
  }
}
