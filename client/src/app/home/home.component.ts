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
  user: any;
  bids: any;
  distances: any;
  latlng: any = [40.7177738, -74.00911511];

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
    console.log(typeof user, "This is the user");
    this.user = user;
    this.http.get("/api/products").subscribe(
      (data: any) => {
        this.bids = data;
        this.getDistances();
        this.sortAuctions();
      },
      error => {
        console.log("oops", error);
      }
    );
  }

  getDistances() {
    this.distances = new Array(this.bids.length);
    for (let bid of this.bids) {
      this.http
        .put<any>("/maps/sort", {
          origins: [this.latlng],
          destinations: [bid.user.location]
        })
        .subscribe(data => {
          this.distances[this.bids.indexOf(bid)] = data;
        });
    }
  }

  sortAuctions() {
    console.log("sorting");
    this.distances.sort((a, b) => {
      console.log("this is a,", a);
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

    // this.distances.sort((a,b) => {
    //   let aIdx = this.bids.indexOf(a)
    //   let bIdx = this.bids.indexOf(b)
    //   if(this.distances[aIdx] < this.distances[bIdx]){
    //     return -1
    //   }
    //   if(this.distances[aIdx] > this.distances[bIdx]){
    //     return 1
    //   }
    //   return 0;
    // })
  }
}
