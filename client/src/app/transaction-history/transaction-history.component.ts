import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "../common/user-profile.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-transaction-history",
  templateUrl: "./transaction-history.component.html",
  styleUrls: ["./transaction-history.component.css"]
})
export class TransactionHistoryComponent implements OnInit {
  userOffers: any = [];
  userAuctions: any = [];
  user: any = {};
  userProducts: any;
  allProducts = [];

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
      this.allProducts = await this._userProfileService.getAllProducts();
      this.userProducts = this.allProducts.filter(product => {
        return product.userId === userId;
      });

      this.userOffers = this.userProducts.filter(product => {
        return product.type === "offer";
      });
      const userAuctions = this.userProducts.filter(product => {
        return (
          product.type === "auction (open)" ||
          product.type === "auction (closed)"
        );
      });
      this.userAuctions = userAuctions;
    } else {
      this.router.navigateByUrl("/login");
    }
  }

  navigateToAuctionForOffer(selectedOffer) {
    let auction = this.allProducts.find(auction => {
      let offer = auction.Offer.find(offer => offer.id === selectedOffer.id);
      return offer ? true : false;
    });
    if (auction) {
      this.router.navigateByUrl(`/auction/${auction.id}`);
    }
  }

  formatDate(dateString) {
    let date = new Date(dateString);

    return date.toDateString();
  }
}
