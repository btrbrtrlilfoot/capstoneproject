import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  _url = '/offers';
  constructor(private _http: HttpClient) {}

  getAllOffers() {
    return this._http.get<any>(this._url);
  }

  getOffer(id: number) {
    return this._http.get<any>(`${this._url}/${id}`);
  }

  postOffer(offer: Offer) {
    return this._http.post<any>(this._url, offer);
  }
}
