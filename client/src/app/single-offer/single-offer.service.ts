import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Offer } from '../offer-form/offer'


@Injectable({
  providedIn: 'root'
})
export class SingleOfferService {

   _url = 'api/offers'

  constructor(private http: HttpClient) { }

  getSingleOffer(){
    return this.http.get(this._url)
  }
}
