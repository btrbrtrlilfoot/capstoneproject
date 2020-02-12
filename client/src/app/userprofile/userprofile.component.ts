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
      const user = await this._userProfileService.getUserById(id);
      this.user = user;

      console.log("UserProfileComponent:ngOnInit:", user);
    });
    let openAuctions = await this._userProfileService.getAllOpenAuctions();
    this.userAuctions = openAuctions.filter(
      auction => auction.userId === this.user.id
    );
    this.clicked = false;
    console.log("active auctions", this.userAuctions);
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
    this._userProfileService.deleteUserAuction(id);
  }
  // console.log('success',event)
  // this.user = await this._userProfileService.changePic(event[1].fileName)
}
