import { Input, Component, OnInit, createPlatformFactory } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { UserProfileService } from "../common/user-profile.service";

//set user info here
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(
    private _userProfileService: UserProfileService,
    private http: HttpClient
  ) {}
  loginForm = new FormGroup({
    $key: new FormControl(null),

    email: new FormControl(""),
    password: new FormControl("")
  });

  ngOnInit() {
    console.log("user", this.user);
  }

  async onSubmit() {
    let Form = this.loginForm.value;
    //   this.http.post("/auth/login", Form).subscribe(
    //     (data: any) => {
    //       this.user = data;
    //       console.log("user", this.user);
    //       // this.router.navigate(['home'])
    //     },
    //     error => {
    //       console.log("oops", error);
    //     }
    //   );
    try {
      this.user = await this._userProfileService.logIn(Form);
    } catch (error) {
      console.error(error);
    }
  }
}
