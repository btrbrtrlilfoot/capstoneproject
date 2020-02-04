import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SingleOfferService {

  private _url = '/offers/:id'

  constructor(private http: HttpClient) { }

  getSingleOffer(){
    return this.http.get(this._url)
  }
}
