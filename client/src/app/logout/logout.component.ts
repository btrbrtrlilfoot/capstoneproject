import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserProfileService } from "../common/user-profile.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  user: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private _userProfileService: UserProfileService
  ) {}

  async ngOnInit() {
    try {
      await this._userProfileService.logout();
      this.user = null;
    } catch (error) {
      console.error;
    }
  }
}
