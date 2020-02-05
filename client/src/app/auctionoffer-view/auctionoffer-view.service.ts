import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuctionViewService {

  _url = '/api/auctions';
  auction: any;
  empty: boolean = true;
  constructor(private _http: HttpClient) {}

  //Returns Auction and Products in an Object
  getAuctionProducts(id: number) {
    let url = `${this._url}/${id}`;
    this.auction = this._http.get<any>(url);
    return this.auction;

  }

  selectOffer(auctionId, offerId) {
    let url = `${this._url}/${auctionId}`;

    this.auction = this._http.put<any>(url, {offerId: offerId});
    return this.auction;
  }

  returnAuction(){
    return this.auction;
  }
}
