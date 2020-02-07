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
  constructor(
    private _userProfileService: UserProfileService,
    private http: HttpClient,
    private router: Router
  ) {}

  onClick(bidId) {
    this.router.navigate([`../auction/${bidId}`]);
  }
  async ngOnInit() {
    console.log("user", this.user);
    AppComponent;

    const user = await this._userProfileService.getUser();
    if (user.hasOwnProperty("id")) {
      this.user = user;
    }

    const bids = await this._userProfileService.getAllProducts();
    this.bids = bids;
  }

  // this.http.get("/api/products").subscribe(
  //   (data: any) => {
  //     this.bids = data;
  //     console.log("bids", this.bids);
  //   },
  //   error => {
  //     console.log("oops", error);
  //   }
  // );
}
