import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "../common/user-profile.service";
import { Router } from "@angular/router";

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

  constructor(
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
    const updated = await this._userProfileService.changePic(event[1].fileName);
    this.user = updated;
  }

  auctionClick(auction) {
    this.router.navigate([`../auction/${auction.id}`]);
  }

  async onClick(id: number) {
    await this._userProfileService.deleteUserAuction(id);
    this.userAuctions = this.userAuctions.filter(auction => auction.id !== id);
  }
  formatDate(dateString) {
    let date = new Date(dateString);
    return date.toDateString();
  }
}
