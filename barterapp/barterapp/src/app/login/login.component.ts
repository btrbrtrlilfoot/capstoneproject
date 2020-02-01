import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms'
//set user info here
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }



  onSubmit(e) {
    console.log('event')
  }
  ngOnInit() {

    this.createForm()


}
 createForm()
  {
    this.loginForm = new FormGroup({
      $key: new FormControl(null),
      name: new FormControl(''),
      email: new FormControl(''),
      pasword: new FormControl(''),
      location: new FormControl('')

  })
}
}
