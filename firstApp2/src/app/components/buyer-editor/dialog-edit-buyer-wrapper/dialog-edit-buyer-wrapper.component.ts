import { Buyer } from './../../../models/Buyer';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'app-dialog-edit-buyer',
    templateUrl: './dialog-edit-buyer-wrapper.component.html',
    styleUrls: ['./dialog-edit-buyer-wrapper.component.scss']
})
export class DialogEditBuyerComponent implements OnInit {
  buyer: Buyer;

  constructor(
    public dialogRef: MatDialogRef<DialogEditBuyerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Buyer
  ) {
    this.buyer = data ? { ...data } : new Buyer();
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmEdit(): void {
    this.dialogRef.close(this.buyer);
  }
}
