import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleOfferService {
  _url = '/api/offers';
  constructor(private _http: HttpClient) {}

  getOffers(auctionId: number) {
    let url = `${this._url}/${auctionId}`;
    return this._http.get(url);
  }
}
