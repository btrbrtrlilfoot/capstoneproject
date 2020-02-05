import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { PostAuctionComponent } from "../post-auction/post-auction.component";

@Component({
  selector: "app-auction-confirmation",
  templateUrl: "./auction-confirmation.component.html",
  styleUrls: ["./auction-confirmation.component.css"]
})
export class AuctionConfirmationComponent implements OnInit {
  @Input() auction: PostAuctionComponent;

  constructor() {}
  ngOnInit() {
    console.log("bid", this.auction);
  }
}
