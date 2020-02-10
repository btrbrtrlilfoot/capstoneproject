import { Component, OnInit, NgModule } from "@angular/core";
import { UserProfileService } from "./common/user-profile.service";
import { LoginComponent } from "./login/login.component";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./appstate";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "BetterBartr";
  currentUser: any = {};
  isLoggedIn: boolean;

  loggedIn: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private _userProfileService: UserProfileService,
    private http: HttpClient
  ) {
    this.loggedIn = this.store.select("loggedIn");
    console.log("loggedin", this.loggedIn);
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
    //
  }
}
