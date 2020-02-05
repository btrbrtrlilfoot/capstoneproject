import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Offer } from "./offer";

@Injectable({
  providedIn: "root"
})
export class OffersService {
  _url = "/api/offers";
  constructor(private _http: HttpClient) {}

  postOffer(offer: Offer, auctionId: number) {
    let url = `${this._url}/${auctionId}`;
    return this._http.post<any>(url, offer);
  }
}
