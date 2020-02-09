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
  userOffers: any;
  userAuctions: any;
  user: any = {};
  userProducts: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private _userProfileService: UserProfileService
  ) {}

  async ngOnInit() {
    const user = await this._userProfileService.getUser();
    this.user = user;

    console.log("The logged in  user", user);

    if (user.id !== undefined) {
      const userId = user.id;
      const products = await this._userProfileService.getAllProducts();

      const userProducts = products.filter(product => {
        return product.userId === userId;
      });

      const userOffers = userProducts.filter(product => {
        return product.type === "offer";
      });

      this.userOffers = userOffers;

      const userAuctions = userProducts.filter(product => {
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
}
