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
      const userAuctions = await this._userProfileService.getAllOpenAuctions();
      this.userAuctions = userAuctions.filter(auction => auction.userId === id);

      console.log("UserProfileComponent:ngOnInit:", user);
    });
    // await this._userProfileService.getAllOpenAuctions()
    //                               .then(data =>

    //               this.userAuctions = data.filter(
    //   auction => auction.userId === this.user.id
    // )
    // )

    console.log("active auctions", this.userAuctions);
    this.router.navigate([`/profile/${this.user.id}`]);
  }

  onUploadSuccess(event) {
    this.user.imageUrl = event[1].fileName;
  }

  onClick(id: number) {
    this._userProfileService.deleteUserAuction(id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  // console.log('success',event)
  // this.user = await this._userProfileService.changePic(event[1].fileName)
}
