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
  id: number;
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
    const user = await this._userProfileService.getUser();
    if (!user.id) {
      this.router.navigate(["home"]);
    }
    this.user = user;
    if (user.id !== undefined) {
      const userId = user.id;
    }
    const userAuctions = await this._userProfileService.getAllOpenAuctions();
    this.userAuctions = userAuctions.filter(
      auction => auction.userId === this.user.id
    );
    let openAuctions = await this._userProfileService.getAllOpenAuctions();
    this.userAuctions = openAuctions.filter(
      auction => auction.userId === this.user.id
    );
    this.clicked = false;
  }

  popUp() {
    this.clicked = true;
  }

  async onUploadSuccess(event) {
    console.log("event", event);
    const updated = await this._userProfileService.changePic(event[1].fileName);
    this.user = updated;
  }
  async onClick(id: number) {
    await this._userProfileService.deleteUserAuction(id);
    //also need to remove the deleted item from userAuctions
    this.userAuctions = this.userAuctions.filter(auction => auction.id !== id);
  }
  formatDate(dateString) {
    let date = new Date(dateString);
    return date.toDateString();
  }
}
