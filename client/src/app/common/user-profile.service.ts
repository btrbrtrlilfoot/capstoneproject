import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  _url = "api/products";
  _url2 = "auth/me";

  constructor(private _http: HttpClient) {}

  async getAllProducts() {
    let url = `${this._url}`;
    let products = await this._http.get<any>(url).toPromise();
    console.log(products);
    return products;
  }

  async getUser() {
    let url2 = `${this._url2}`;
    let user = await this._http.get<any>(url2).toPromise();
    return user;
  }
}
