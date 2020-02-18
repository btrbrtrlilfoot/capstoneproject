import { Component, OnInit } from "@angular/core";
import { SingleOfferService } from "./single-offer.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UserProfileService } from "../common/user-profile.service";

@Component({
  selector: "app-single-offer",
  templateUrl: "./single-offer.component.html",
  styleUrls: ["./single-offer.component.css"]
})
export class SingleOfferComponent implements OnInit {
  offer: any = {};
  auctionId: string = "";
  error = false;
  private sub: any;
  offerId: string = "";
  currentUser: any;
  disableDeleteBtn: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private _singleOfferService: SingleOfferService,
    private location: Location,
    private _userProfileService: UserProfileService
  ) {}

  async ngOnInit() {
    const user = await this._userProfileService.getUser();
    this.currentUser = user;
    this.sub = this.route.params.subscribe(async params => {
      let auctionId = params["auctionId"];
      this.auctionId = auctionId;
      let offerId = params["id"];
      this.offerId = offerId;
      const singleOffer = await this._singleOfferService.getSingleOffer(
        auctionId,
        offerId
      );
      if (singleOffer !== undefined) {
        this.offer = singleOffer;
        this.auctionId = auctionId;
      } else {
        this.error = true;
      }
      this.disableDeleteBtn = this.currentUser.id !== this.offer.userId;
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async deleteSingleOffer() {
    await this._singleOfferService.deleteSingleOffer(
      this.auctionId,
      this.offerId
    );
    this.location.back();
  }
}
