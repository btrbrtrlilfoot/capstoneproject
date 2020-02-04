import { Component, OnInit, createPlatformFactory } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

//set user info here
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private formBuilder: FormBuilder, private router: Router,private http: HttpClient) {}

  
  ngOnInit() {
  }

 
  
  loginForm = new FormGroup({
    $key: new FormControl(null),
    
    email: new FormControl(''),
    password: new FormControl('')
    
    })

    onSubmit() {
      let Form = this.loginForm.value;
      console.log('form',Form)
      this.http.post('/auth/login', Form).subscribe((data:any) =>  {
        this.user = data;
        this.router.navigate(['home'])

      }, error => { console.log('oops', error)})
      
    
    }
  }

