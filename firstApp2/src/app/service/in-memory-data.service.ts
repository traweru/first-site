import { Injectable } from '@angular/core';
import { Buyer } from '../models/Buyer';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const buyers = [
      {id: 0, name: 'Имя', surname: 'Фамилия',coments:''},
      {id: 1, name: 'Имя 1', surname: 'Фамилия 1',coments:''},
      {id: 2, name: 'Имя 2', surname: 'Фамилия 2',coments:''}
    ];
    return {buyers};
  }

  genId(buyers: Buyer[]): number {
    return buyers.length > 0 ? Math.max(...buyers.map(buyer => buyer.id ? buyer.id : 0)) + 1 : 11;
  }
}

