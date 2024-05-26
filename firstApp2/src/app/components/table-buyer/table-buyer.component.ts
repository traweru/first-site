import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Buyer } from '../../models/Buyer';
import { BaseServiceService } from 'src/app/service/base-service.service';
import { DialogEditWrapperComponent } from '../buyer-editor/dialog-edit-wrapper/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { DialogEditBuyerComponent } from '../buyer-editor/dialog-edit-buyer-wrapper/dialog-edit-buyer-wrapper.component';
import { DialogDeleteWrapperComponent } from '../buyer-editor/dialog-delete-wrapper/dialog-delete-wrapper/dialog-delete-wrapper.component';

@Component({
  selector: 'app-table-buyers',
  templateUrl: './table-buyer.component.html',
  styleUrls: ['./table-buyer.component.scss']
})
export class TableBuyersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'functions', 'coments'];
  dataSource!: MatTableDataSource<Buyer>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private baseService: BaseServiceService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadBuyers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadBuyers() {
    this.baseService.getAllBuyers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addNewBuyer() {
    const dialogAddingNewBuyer = this.dialog.open(DialogEditWrapperComponent, {
      width: '400px',
      data: null
    });
    dialogAddingNewBuyer.afterClosed().subscribe((result: Buyer) => {
      if (result != null) {
        console.log("Adding new buyer: " + result.name);
        this.baseService.addNewBuyer(result).subscribe(() => this.loadBuyers());
      }
    });
  }

  deleteBuyer(buyer: Buyer) {
    const dialogDeletingBuyer = this.dialog.open(DialogDeleteWrapperComponent, {
      width: '400px',
      data: new Buyer()
    });
    dialogDeletingBuyer.afterClosed().subscribe((result: boolean) => {
      if (result == true && buyer.id !== null) {
        console.log("Deleting buyer: " + buyer.name);
        this.baseService.deleteBuyerById(buyer.id).subscribe(() => this.loadBuyers());
      }
    });
  }

  editBuyer(buyer: Buyer) {
    const dialogEditingBuyer = this.dialog.open(DialogEditBuyerComponent, {
      width: '400px',
      data: buyer
    });
    dialogEditingBuyer.afterClosed().subscribe((result: Buyer) => {
      if (result != null) {
        console.log("Editing buyer: " + result.id);
        this.baseService.updateBuyer(result).subscribe(() => this.loadBuyers());
      }
    });
  }
}

