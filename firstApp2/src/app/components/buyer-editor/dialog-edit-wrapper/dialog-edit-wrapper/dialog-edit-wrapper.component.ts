import { Buyer } from './../../../../models/Buyer';
import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-edit-wrapper',
  templateUrl: './dialog-edit-wrapper.component.html',
  styleUrls: ['./dialog-edit-wrapper.component.scss']
})
export class DialogEditWrapperComponent implements OnInit {
  editingBuyer : Buyer;
  constructor(public dialogRef: MatDialogRef<DialogEditWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Buyer) {
      this.editingBuyer = new Buyer();
     }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


