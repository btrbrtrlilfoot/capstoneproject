import { Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  @Output() currentUser: any = {};

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
    let url = `${this._url1}`;
    let products = await this._http.get<any>(url).toPromise();
    console.log("UserProfileService:getAllProducts", products);
    return products;
  }

  async getAllOpenAuctions() {
    let url = `${this._url}`;
    let products = await this._http.get<any>(url).toPromise();
    return products;
  }

  /**
   *  Fetch the currently signed in user
   */
  async getUser() {
    let url2 = `${this._url2}`;
    let user = await this._http.get<any>(url2).toPromise();
    this.currentUser = user || {};
    return this.currentUser;
  }

  /**
   *  Fetch any user with an id
   */
  async getUserById(id: number) {
    let url = `${this._users}/${id}`;
    let user = await this._http.get<any>(url).toPromise();
    this.currentUser = user || {};
    return this.currentUser;
  }

  //sign user in
  async logIn(form) {
    let user = await this._http.post(this._url3, form).toPromise();
    this.currentUser = user || {};
    this.isLoggedIn = true;
    return this.currentUser;
  }

  async signUp(form) {
    let user = await this._http.post(this._url5, form).toPromise();
    this.currentUser = user || {};
    this.isLoggedIn = true;
    return this.currentUser;
  }

  async logout() {
    this.isLoggedIn = false;
    console.log("logged out1", this.currentUser);
    const user = await this._http
      .post(this._url4, this.currentUser)
      .toPromise();
    console.log("logged out3", this.currentUser);
    this.currentUser = {};
    console.log("logged out2", this.currentUser);
    return this.currentUser;
  }
}
