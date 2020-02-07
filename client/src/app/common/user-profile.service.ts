import { Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  @Output() currentUser = {};
  isLoggedIn: boolean;
  _url = "api/products";
  _url1 = "api/products/allproducts";
  _url2 = "auth/me";
  _url3 = "auth/login";
  _url4 = "auth/logout";
  _url5 = "auth/signup";
  _users = "api/users";

  constructor(private _http: HttpClient) {
    this.isLoggedIn = false;
  }

  async getAllProducts() {
    let url = `${this._url}`;
    let products = await this._http.get<any>(url).toPromise();
    console.log(products, "This is products from user-profile");
    return products;
  }

  async getAllAuction() {
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
    console.log("curuser", user);
    this.currentUser = user;
    return user || {};
  }

  /**
   *  Fetch any user with an id
   */
  async getUserById(id: number) {
    let url = `${this._users}/${id}`;
    let user = await this._http.get<any>(url).toPromise();
    this.currentUser = user;
    return user || {};
  }

  //sign user in
  async logIn(form) {
    let user = await this._http.post(this._url3, form).toPromise();
    this.currentUser = user;
    this.isLoggedIn = true;
    return user || {};
  }

  async signUp(form) {
    let user = await this._http.post(this._url5, form).toPromise();
    this.currentUser = user;
    this.isLoggedIn = true;
    return user || {};
  }

  async logout() {
    this.isLoggedIn = false;

    const user = await this._http
      .post(this._url4, this.currentUser)
      .toPromise();

    return user || {};
  }
}
