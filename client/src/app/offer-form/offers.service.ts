import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  _url = '/offers';
  constructor(private _http: HttpClient) {}

  postOffer(offer: Offer) {
    return this._http.post<any>(this._url, offer);
  }
}
