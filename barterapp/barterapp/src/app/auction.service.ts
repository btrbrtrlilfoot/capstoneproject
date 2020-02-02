import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuctionService  {
  API_URL: string = '/api/'
  constructor(private http: HttpClient) { }
  getAuctions(){
    return this.http.get(this.API_URL + 'auctions')
   }
   getAuction(auctionId){
    return this.http.get(`${this.API_URL + 'auctions'}/${auctionId}`)
   }
  postAuction(val) {
    return this.http.post(this.API_URL + 'auctions', val)
  }
}
