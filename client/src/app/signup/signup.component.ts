import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
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
  latlng: any;
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      $key: new FormControl(null),
      image: new FormControl(""),
      name: new FormControl("", Validators.minLength(1)),
      email: new FormControl("", Validators.email),
      password: new FormControl("", Validators.minLength(1)),
      location: new FormControl("", Validators.minLength(1))
    });
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latlng = `${position.coords.latitude},${
          position.coords.longitude
        }`;

        this.http
          .get<any>(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
              this.latlng
            }&key=AIzaSyAB2g8hlk5lD0gVBQBQ2-5DwmGMznAuKUA
       `
          )
          .subscribe(data => {
            this.userForm.patchValue({
              location: data.results[0].formatted_address
            });
          });
      });
    }
  }

  getGeocode(location) {
    this.http
      .get<any>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}key=AIzaSyAB2g8hlk5lD0gVBQBQ2-5DwmGMznAuKUA
      `
      )
      .subscribe(data => {
        if (data) {
          this.userForm.patchValue({
            location: `${data.results[0].geometry.location.lat},${
              data.results[0].geometry.location.lng
            }`
          });
        }
      });
  }

  onSubmit() {
    if (this.latlng) {
      this.userForm.patchValue({
        location: this.latlng
      });
    } else {
      this.getGeocode(this.userForm.value.location);
    }

    let Form = this.userForm.value;
    this.http.post("/auth/signup", Form).subscribe(
      (data: any) => {
        this.user = data;
      },
      error => {
        console.log("oops", error);
      }
    );

    this.router.navigate(["home"]);
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
