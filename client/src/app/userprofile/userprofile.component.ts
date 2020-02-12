import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "../common/user-profile.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-userprofile",
  templateUrl: "./userprofile.component.html",
  styleUrls: ["./userprofile.component.css"]
})
export class UserProfileComponent implements OnInit {
  userOffers: any;
  clicked: boolean;
  userAuctions: any;
  user: any = {};
  private sub: any;
  private _sub: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private _userProfileService: UserProfileService
  ) {}

  async ngOnInit() {
    const checkUser = await this._userProfileService.getUser();
    if (!checkUser.id) {
      console.log("no id....");

      this.router.navigate(["home"]);
    }
    this.sub = this.route.params.subscribe(async params => {
      let id = Number(params["id"]);

      this._sub = await this.http.get("/auth/me").subscribe(
        (data: any) => {
          this.user = data;
          console.group("userin profile", this.user);
        },
        error => {
          console.log("oops", error);
        }
      );

      const userAuctions = await this._userProfileService.getAllOpenAuctions();
      this.userAuctions = userAuctions.filter(auction => auction.userId === id);

      console.log("UserProfileComponent:ngOnInit:", this.user);
    });
    let openAuctions = await this._userProfileService.getAllOpenAuctions();
    this.userAuctions = openAuctions.filter(
      auction => auction.userId === this.user.id
    );
    this.clicked = false;
    console.log("active auctions", this.userAuctions);
    this.router.navigate([`/profile/${this.user.id}`]);
  }

  popUp() {
    this.clicked = true;
  }

  async onUploadSuccess(event) {
    console.log("event", event);
    const updated = await this._userProfileService.changePic(event[1].fileName);
    this.user = updated;
    console.log("userururur", this.user);
  }

  onClick(id: number) {
    this.http.delete(`/api/products/${id}`).subscribe(newData => {
      this.userAuctions = newData;
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
  // console.log('success',event)
  // this.user = await this._userProfileService.changePic(event[1].fileName)
}
