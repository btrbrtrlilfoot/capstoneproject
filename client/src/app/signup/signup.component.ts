import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
// import axios from 'axios'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }


  onSubmit =  async (req,res,next) =>{
    console.log('event')
  }


  ngOnInit() {
    this.createForm()
  }
  createForm()
  {
  //   this.loginForm = new FormGroup({
  //     $key: new FormControl(null),
  //     name: new FormControl(''),
  //     email: new FormControl(''),
  //     pasword: new FormControl(''),
  //     location: new FormControl('')

  // })
}
}
