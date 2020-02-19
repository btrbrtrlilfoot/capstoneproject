import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuctionViewService } from "./auctionoffer-view.service";
import { UserProfileService } from "../common/user-profile.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-auctionoffer-view",
  templateUrl: "./auctionoffer-view.component.html",
  styleUrls: ["./auctionoffer-view.component.css"]
})
export class AuctionofferViewComponent implements OnInit {
  id: number;
  auctionOwnerId: any;
  offers: any = [];
  auction: any = {};
  auctionStatus: string;
  buttonDisable: boolean;
  userId: any;
  user: any = {};
  selectedOffer: number;
  private sub: any;
  disableDeleteBtn: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private auctionView: AuctionViewService,
    private userProfileService: UserProfileService,
    private location: Location
  ) {}

  async ngOnInit() {
    this.user = await this.userProfileService.getUser();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
    });

    await this.auctionView.getAuctionProducts(this.id).subscribe(
      data => {
        this.auction = data;
        this.auctionOwnerId = this.auction.userId;
        if (
          this.auction.type !== "auction (closed)" &&
          this.auction.type !== "auction (open)"
        ) {
          this.router.navigateByUrl("/");
        }

        this.offers = data.Offer;
        if (this.auction.type === "auction (open)") {
          this.auctionStatus = "open";
          this.buttonDisable = false;
        } else {
          this.auctionStatus = "closed";
          this.buttonDisable = true;
        }

        this.disableDeleteBtn = this.user.id !== this.auction.userId;
      },
      error => console.log("theres been an error")
    );
  }
  onSubmit(offerId) {
    this.sub = this.auctionView.selectOffer(this.id, offerId).subscribe(
      data => {
        this.offers = data.Offer;
        this.auction = data;
        this.auctionStatus = "closed";
        this.buttonDisable = true;
        this.router.navigateByUrl(`/auction/${this.id}/success`);
      },
      error => console.log("theres been an error")
    );
  }
  goBack() {
    this.location.back();
  }
  async deleteAuctionOffer() {
    await this.auctionView.deleteAuctionOffer(this.id);
    this.router.navigateByUrl(`/home`);
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
