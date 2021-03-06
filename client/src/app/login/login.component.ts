import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { UserProfileService } from "../common/user-profile.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(
    private router: Router,
    private _userProfileService: UserProfileService,
    private http: HttpClient
  ) {}
  loginForm = new FormGroup({
    $key: new FormControl(null),

    email: new FormControl(""),
    password: new FormControl("")
  });

  async ngOnInit() {
    const checkUser = await this._userProfileService.getUser();
    if (checkUser.id) {
      this.router.navigate(["home"]);
    }
  }

  async onSubmit() {
    let Form = this.loginForm.value;
    try {
      this.user = await this._userProfileService.logIn(Form);
      this._userProfileService.isLoggedIn.next(true);
      this.router.navigate(["home"]);
    } catch (error) {
      console.error(error);
    }
  }
}
