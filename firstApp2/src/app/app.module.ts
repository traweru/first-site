import { DialogDeleteWrapperComponent } from './components/buyer-editor/dialog-delete-wrapper/dialog-delete-wrapper/dialog-delete-wrapper.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { buyerEditorComponent } from './components/buyer-editor/buyer-editor.component';
import { TableBuyersComponent } from './components/table-buyer/table-buyer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogEditWrapperComponent } from './components/buyer-editor/dialog-edit-wrapper/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { BuyerDeleteComponent } from './components/buyer-editor/buyer-delete/buyer-delete.component';
import { DialogEditBuyerComponent } from './components/buyer-editor/dialog-edit-buyer-wrapper/dialog-edit-buyer-wrapper.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    buyerEditorComponent,
    TableBuyersComponent,
    DialogEditWrapperComponent,
    DialogDeleteWrapperComponent,
    BuyerDeleteComponent,
    DialogEditBuyerComponent

  ],
  imports: [
    MatSortModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, {dataEncapsulation: false}),
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
