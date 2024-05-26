import { BaseServiceService } from 'src/app/service/base-service.service';
import { Buyer } from '../../models/Buyer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-editor',
  templateUrl: './buyer-editor.component.html',
  styleUrls: ['./buyer-editor.component.scss']
})
export class buyerEditorComponent implements OnInit {
  editingbuyer: Buyer;

  constructor(private baseService: BaseServiceService) {
    this.editingbuyer = new Buyer();
   }

  ngOnInit(): void {
  }

}


