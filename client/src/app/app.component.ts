import { Component, OnInit, NgModule } from "@angular/core";
import { UserProfileService } from "./common/user-profile.service";
import { LoginComponent } from "./login/login.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  currentUser: any = {};
  isLoggedIn: any;
  constructor(
    private _userProfileService: UserProfileService,
    private http: HttpClient
  ) {
    this._userProfileService.isLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
    });
  }

  async onClick() {
    try {
      await this._userProfileService.logout();
      this.currentUser = {};
    } catch (error) {
      console.error;
    }
  }
  async ngOnInit() {
    const user = await this._userProfileService.getUser();
    if (user.hasOwnProperty("id")) {
      this.currentUser = user;
    } else {
      this.currentUser = {};
    }
    console.log("appuser", this.currentUser);
  }
}
