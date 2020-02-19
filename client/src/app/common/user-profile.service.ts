import { Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserProfileService {
  @Output() currentUser: any = {};

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _url = "api/products";
  _url1 = "api/products/allproducts";
  _url2 = "auth/me";
  _url3 = "auth/login";
  _url4 = "auth/logout";
  _url5 = "auth/signup";
  _users = "api/users";

  constructor(private _http: HttpClient) {}

  async getAllProducts() {
    let url = `${this._url1}`;
    let products = await this._http.get<any>(url).toPromise();
    return products;
  }

  async getAllOpenAuctions() {
    let url = `${this._url}`;
    let products = await this._http.get<any>(url).toPromise();
    return products;
  }

  async deleteUserAuction(id) {
    let url = `${this._url}/${id}`;
    await this._http.delete<any>(url).toPromise();
  }

  async getUser() {
    let url2 = `/${this._url2}`;
    let user = await this._http.get<any>(url2).toPromise();
    this.currentUser = user || {};
    if (this.currentUser.id) {
      this.isLoggedIn.next(true);
    }
    return this.currentUser;
  }

  async getUserById(id: number) {
    let url = `${this._users}/${id}`;
    let user = await this._http.get<any>(url).toPromise();
    this.currentUser = user || {};
    return this.currentUser;
  }

  async logIn(form) {
    let user = await this._http.post(this._url3, form).toPromise();
    this.currentUser = user || {};
    return this.currentUser;
  }

  async signUp(form) {
    let user = await this._http.post(this._url5, form).toPromise();
    this.currentUser = user || {};

    return this.currentUser;
  }
  async changePic(img) {
    let user = this._http.post(this._users, img);
    this.currentUser = user || {};
    return this.currentUser;
  }
  async logout() {
    await this._http.post(this._url4, this.currentUser).toPromise();
    this.currentUser = {};
    return this.currentUser;
  }
}
