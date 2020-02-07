import { Component, OnInit, Input } from "@angular/core";
import { AppComponent } from "../app.component";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { UserProfileService } from "../common/user-profile.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @Input() user: LoginComponent;
  bids: [];
  searchText: string;
  constructor(
    private _userProfileService: UserProfileService,
    private http: HttpClient,
    private router: Router
  ) {}
  // Changed this, is now working.Do not remove
  onClick(bid) {
    this.router.navigate([`../auction/${bid.id}`]);
  }

  async ngOnInit() {
    console.log("user", this.user);
    AppComponent;

    const user = await this._userProfileService.getUser();
    if (user.hasOwnProperty("id")) {
      this.user = user;
    }

    const bids = await this._userProfileService.getAllOpenAuctions();
    this.bids = bids;
  }
}
