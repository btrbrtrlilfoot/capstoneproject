import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TransactionConfirmationService {
  _url = "/api/products";
  constructor(private _http: HttpClient) {}

  async getProducts(userId: number) {
    let url = `${this._url}`;
    let response = await this._http.get<any>(url).toPromise();
    console.log(response);
  }
}
