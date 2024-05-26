import { Injectable } from '@angular/core';
import { Buyer } from '../models/Buyer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  private buyersUrl = 'api/buyers';

  constructor(
    private http: HttpClient) { }

  getAllBuyers(): Observable<Buyer[]> {
    return this.http.get<Buyer[]>(this.buyersUrl);
  }

  addNewBuyer(buyer: Buyer): Observable<Buyer> {
    console.log('addNewBuyer');
    return this.http.post<Buyer>(this.buyersUrl, buyer).pipe();
  }

  deleteBuyerById(buyerId: number): Observable<void> {
    const url = `${this.buyersUrl}/${buyerId}`;
    return this.http.delete<void>(url);
  }

  getBuyerById(buyerId: number): Observable<Buyer> {
    const url = `${this.buyersUrl}/${buyerId}`;
    return this.http.get<Buyer>(url);
}

  updateBuyer(buyer: Buyer): Observable<Buyer> {
    const url = `${this.buyersUrl}/${buyer.id}`;
    return this.http.put<Buyer>(url, buyer);
}



}
