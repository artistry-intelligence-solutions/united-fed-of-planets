import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-quadrant-map',
  templateUrl: './quadrant-map.component.html',
  styleUrls: ['./quadrant-map.component.scss']
})
export class QuadrantMapComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(QaudrantDialogueComponent, {
      width: '796px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'app-quadrant-dialogue',
  templateUrl: 'app-quadrant-dialogue.html',
  styles: [`
    img {
      width: calc(700px + 48px);
    }
  `]
})
export class QaudrantDialogueComponent {

  constructor(
    public dialogRef: MatDialogRef<QaudrantDialogueComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}