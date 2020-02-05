import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
  
  ngOnInit()  {}

  userForm = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    location: new FormControl("")
  });
  onSubmit() {
    let Form = this.userForm.value;

    this.http.post('/auth/signup', Form).subscribe((data:any) =>  {
      this.user = data;
      this.router.navigate(['/home'])
    }, error => { console.log('oops', error)})
    
  }

   
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
