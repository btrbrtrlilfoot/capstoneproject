import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserProfileService } from "../common/user-profile.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user: any;
  latlng: any;
  userForm: FormGroup;
  loading = false;
  searchButtonText = "Find Location";

  constructor(
    private _userProfileService: UserProfileService,
    private router: Router,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    this.userForm = new FormGroup({
      $key: new FormControl(null),
      name: new FormControl("", Validators.minLength(1)),
      email: new FormControl("", Validators.email),
      password: new FormControl("", Validators.minLength(1)),
      location: new FormControl("", Validators.minLength(1)),
      phoneNumber: new FormControl("")
    });

    const checkUser = await this._userProfileService.getUser();
    if (checkUser.id) {
      this.router.navigate(["home"]);
    }
  }

  findMe() {
    this.loading = true;
    this.searchButtonText = "Finding...";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latlng = [position.coords.latitude, position.coords.longitude];

        const location = this.http
          .post<any>("/maps/reverse", { latlng: this.latlng })
          .subscribe(data => {
            this.userForm.patchValue({
              location: data
            });
          });
        this.loading = false;
        this.searchButtonText = "Find Location";
      });
    }
  }

  getGeocode(location) {
    this.http
      .post<any>("/maps/geocode", { address: location })
      .subscribe(data => {
        if (data) {
          this.userForm.patchValue({
            location: data
          });
          this.signUp();
        }
      });
  }

  async signUp() {
    let Form = this.userForm.value;
    const signedUp = await this._userProfileService.signUp(Form);
    if (signedUp) {
      this._userProfileService.isLoggedIn.next(true);
      this.router.navigate(["home"]);
    }
  }

  async onSubmit() {
    if (this.latlng) {
      this.userForm.patchValue({
        location: this.latlng
      });
      this.signUp();
    } else {
      this.getGeocode(this.userForm.value.location);
    }
  }
}
