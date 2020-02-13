import { Component, OnInit, NgModule } from "@angular/core";
import { UserProfileService } from "./common/user-profile.service";
import { LoginComponent } from "./login/login.component";
import { HttpClient } from "@angular/common/http";
import { Router, Event, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  navigationSubscription;
  userSub;
  currentUser: any = {};
  isLoggedIn: any;
  constructor(
    private _userProfileService: UserProfileService,
    private http: HttpClient,
    private router: Router
  ) {
    this.userSub = this._userProfileService.isLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
    });
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseApp();
      }
    });
  }
  initialiseApp() {
    this.currentUser = {};
    this.isLoggedIn = false;
  }
  async onClick() {
    try {
      await this._userProfileService.logout();
    } catch (error) {
      console.error;
    }
  }
  async ngOnInit() {
    const user = await this._userProfileService.getUser();

    this.currentUser = user;

    console.log("curuserrrr", this.currentUser);
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
