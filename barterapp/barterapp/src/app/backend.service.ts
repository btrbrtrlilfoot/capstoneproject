import { Injectable } from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  constructor() { }
  createDb()  {
    let auctions = [
      { id: 1, item: 'Juicer', description: 'Juices fruits and veg'}
    ]
    let users = [
      {id: 1, name: 'Rachel', email: 'rtaverna96@gmail.com', password:'password', location: 'NYC'}
    ]
    return {auctions,users}
  }
}
