import { Buyer } from './../../../models/Buyer';
import { Component, OnInit } from '@angular/core';
import { BaseServiceService } from 'src/app/service/base-service.service';


@Component({
  selector: 'app-buyer-delete',
  templateUrl: './buyer-delete.component.html',
  styleUrls: ['./buyer-delete.component.scss']
})
export class BuyerDeleteComponent implements OnInit {
  deletingBuyer!: Buyer;

  constructor(private baseService: BaseServiceService) {

  }

  ngOnInit(): void {
  }

}
