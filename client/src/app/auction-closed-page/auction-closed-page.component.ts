import { Component, OnInit, Input } from "@angular/core";
import { AuctionViewService } from "../auctionoffer-view/auctionoffer-view.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-auction-closed-page",
  templateUrl: "./auction-closed-page.component.html",
  styleUrls: ["./auction-closed-page.component.css"]
})
export class AuctionClosedPageComponent implements OnInit {
  auction: any;
  private sub: any;
  acceptedOffer: any = {};
  id: any;
  private sub2;
  constructor(
    private auctionView: AuctionViewService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //This is to pull the id of the auction from the link.
    this.sub2 = this.route.params.subscribe(params => {
      this.id = +params["id"];
      //the + is to coerce it from string to numerical
    }); //Get URL Id

    this.auction = this.auctionView
      .getAuctionProducts(this.id)
      .subscribe(data => {
        console.log("this is auction", data);
        this.auction = data;
        this.acceptedOffer = this.auction.Offer.find(outerOffer => {
          let inner = outerOffer.offer;
          if (inner && inner.status === "accepted") {
            return true;
          }
          return false;
        });
      });
  }
}
