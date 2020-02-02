import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BidService  {
  API_URL: string = '/api/'
  constructor(private http: HttpClient) { }
  getBids(){
    return this.http.get(this.API_URL + 'bids')
   }
   getBid(bidId){
    return this.http.get(`${this.API_URL + 'bids'}/${bidId}`)
   }
  postBid(val) {
    return this.http.post(this.API_URL + 'bids', val)
  }
}
