import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SingleOfferService {
  _url = "/api/offers";
  constructor(private _http: HttpClient) {}

  async getSingleOffer(auctionId: string, offerId: string) {
    let url = `${this._url}/${auctionId}`;
    let response = await this._http.get<any>(url).toPromise();
    let singleOffer = response.find(offer => {
      return Number(offerId) === offer.id;
    });
    return singleOffer;
  }

  async deleteSingleOffer(auctionId: string, offerId: string) {
    let url = `${this._url}/${auctionId}/${offerId}`;
    await this._http.delete<any>(url).toPromise();
    return;
  }
}
