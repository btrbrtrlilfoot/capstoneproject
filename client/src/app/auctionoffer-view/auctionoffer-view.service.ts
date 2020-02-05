import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AuctionViewService {
  _url = '/api/auctions';
  constructor(private _http: HttpClient) {}


  //Returns Auction and Products in an Object
  getAuctionProducts(id: number) {
    let url = `${this._url}/${id}`;
    return this._http.get<any>(url)
  }

  selectOffer(auctionId, offerId){
    let url = `${this._url}/${auctionId}`;
    return this._http.put<any>(url, {offerId: offerId})
  }

}
