import { Component, OnInit, Input } from "@angular/core";
import { AppComponent } from "../app.component";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { UserProfileService } from "../common/user-profile.service";
import { BehaviorSubject, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  user: any = {};
  bids: any;
  latlng: any;
  private sub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private _userProfileService: UserProfileService,
    private http: HttpClient,
    private router: Router
  ) {}
  // Changed this, is now working.Do not remove
  onClick(bid) {
    this.router.navigate([`../auction/${bid.id}`]);
  }

  async ngOnInit() {
    console.group("userinhomee", this.user);

    this._userProfileService.getUser().then(
      (data: any) => {
        this.user = data;
      },
      error => {
        console.log("oops", error);
      }
    );

    this.sub.add(
      this.http.get("/api/products").subscribe(
        (data: any) => {
          this.bids = data;
          if (this.user.id) {
            this.latlng = this.user.location;
            this.getDistances();
          }
        },
        error => {
          console.log("oops", error);
        }
      )
    );
  }

  getDistances() {
    if (this.user.id) {
      this.sub.add(
        this.http
          .put<any>("/maps/sort", {
            origins: this.latlng,
            bids: this.bids
          })
          .subscribe(data => {
            console.log("this is bids", data);
            this.bids = data;
          })
      );
    }
  }

  sortAuctions() {
    console.log("sorting", this.bids);
    this.bids.sort((a, b) => {
      if (a.distance < b.distance) {
        return -1;
      }
      if (a.distance > b.distance) {
        return 1;
      }
      return 0;
    });

    console.log("bids", this.bids);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
