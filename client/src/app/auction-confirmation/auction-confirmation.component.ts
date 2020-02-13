import { Component, OnInit, Input } from "@angular/core";
import { PostAuctionComponent } from "../post-auction/post-auction.component";

@Component({
  selector: "app-auction-confirmation",
  templateUrl: "./auction-confirmation.component.html",
  styleUrls: ["./auction-confirmation.component.css"]
})
export class AuctionConfirmationComponent implements OnInit {
  @Input() auction: PostAuctionComponent;

  constructor() {}
  ngOnInit() {}
}
