import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }

  ngOnInit()  {}
  user = new FormGroup({
        $key: new FormControl(null),
        name: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        location: new FormControl('')
  })
  onSubmit()  {

    console.log(this.user.value)
    this.usersService.postUser(this.user.value)
      .subscribe(
        response => console.log('success',response),
        error => console.error('error!',error)
      )
  }
  }



  // onSubmit =  async (req,res,next) =>{
  //   console.log('event')
  // }


  // ngOnInit() {
  //   this.createForm()
  // }
  // createForm()
  // {
  //   this.loginForm = new FormGroup({
  //     $key: new FormControl(null),
  //     name: new FormControl(''),
  //     email: new FormControl(''),
  //     pasword: new FormControl(''),
  //     location: new FormControl('')

  // })

