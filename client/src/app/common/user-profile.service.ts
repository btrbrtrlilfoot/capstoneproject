import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  _url = "api/products";
  _url2 = "auth/me";
  _users = "api/users";

  constructor(private _http: HttpClient) {}

  async getAllProducts() {
    let url = `${this._url}`;
    let products = await this._http.get<any>(url).toPromise();
    console.log(products);
    return products;
  }

  /**
   *  Fetch the currently signed in user
   */
  async getUser() {
    let url2 = `${this._url2}`;
    let user = await this._http.get<any>(url2).toPromise();
    return user || {};
  }

  /**
   *  Fetch any user with an id
   */
  async getUserById(id: number) {
    let url = `${this._users}/${id}`;
    let user = await this._http.get<any>(url).toPromise();
    return user || {};
  }
}
