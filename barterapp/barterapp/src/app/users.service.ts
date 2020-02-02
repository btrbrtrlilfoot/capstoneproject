import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URL: string = '/auth/'
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get(this.API_URL + 'users')
   }
   getUser(userId){
    return this.http.get(`${this.API_URL + 'users'}/${userId}`)
   }
  postUser(val) {
    return this.http.post(this.API_URL + 'users', val)
  }
}
