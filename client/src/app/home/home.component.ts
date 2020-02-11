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
  user: any = {};
  bids: any;
  latlng: any;

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
    const user = await this._userProfileService.getUser();
    this.user = user;
    this.latlng = this.user.location;
    this.http.get("/api/products").subscribe(
      (data: any) => {
        console.log("this is user location", this.latlng);
        this.bids = data;
        this.getDistances();
      },
      error => {
        console.log("oops", error);
      }
    );
  }

  getDistances() {
    for (let bid of this.bids) {
      this.http
        .put<any>("/maps/sort", {
          origins: [this.latlng],
          destinations: [bid.user.location]
        })
        .subscribe(data => {
          bid.distance = data;
        });
    }
  }

  sortAuctions() {
    this.bids.sort((a, b) => {
      if (a.distance < b.distance) {
        return -1;
      }
      if (a.distance > b.distance) {
        return 1;
      }
      return 0;
    });
  }
}
