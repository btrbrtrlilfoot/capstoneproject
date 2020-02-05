import { Component, OnInit } from "@angular/core";
import { SingleOfferService } from "./single-offer.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-offer",
  templateUrl: "./single-offer.component.html",
  styleUrls: ["./single-offer.component.css"]
})
export class SingleOfferComponent implements OnInit {
  offer: any = {};
  auctionId: string = "";

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private _singleOfferService: SingleOfferService
  ) {}

  async ngOnInit() {
    // setup a callback for when angular knows the route
    this.route.params.subscribe(async params => {
      // params is the route information
      let auctionId = params["auctionId"];
      let offerId = params["id"];
      const singleOffer = await this._singleOfferService.getSingleOffer(
        auctionId,
        offerId
      );

      this.offer = singleOffer;
      this.auctionId = auctionId;
    });
  }
}
