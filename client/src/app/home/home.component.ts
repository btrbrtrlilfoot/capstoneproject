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
  currentUser: any = {};
  bids: any;
  latlng: any;
  tags = ["technology", "game", "plants", "clothes", "art", "music"];
  private sub: Subscription = new Subscription();
  searchText: string;
  constructor(
    private route: ActivatedRoute,
    private _userProfileService: UserProfileService,
    private http: HttpClient,
    private router: Router
  ) {}

  onClick(bid) {
    this.router.navigate([`../auction/${bid.id}`]);
  }

  onTagClicked(tag) {
    console.log("It is being clicked");
    console.log(tag);
    this.searchText = tag;
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  async ngOnInit() {
    console.group("userinhomee", this.currentUser);

    this._userProfileService.getUser().then(
      (data: any) => {
        this.currentUser = data;
        console.group("userinhomee", this.currentUser);
      },
      error => {
        console.log("oops", error);
      }
    );

    this.sub.add(
      this.http.get("/api/products").subscribe(
        (data: any) => {
          this.bids = data;
          if (this.currentUser.id) {
            this.latlng = this.currentUser.location;
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
    if (this.currentUser.id) {
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
