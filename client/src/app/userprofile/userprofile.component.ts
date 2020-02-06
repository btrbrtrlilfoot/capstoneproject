import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "./user-profile.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-userprofile",
  templateUrl: "./userprofile.component.html",
  styleUrls: ["./userprofile.component.css"]
})
export class UserprofileComponent implements OnInit {
  userOffers: any;
  userAuctions: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private _userProfileService: UserProfileService
  ) {}

  async ngOnInit() {
    const products = await this._userProfileService.getAllProducts();
    const user = await this._userProfileService.getUser();
    this.user = user;
    console.log("----------->User", user);
    if (user !== undefined) {
      const userId = user.id;

      const userProducts = products.filter(product => {
        return product.userId === userId;
      });
      console.log(userProducts);

      const userOffers = userProducts.filter(product => {
        return product.type === "offer";
      });
      this.userOffers = userOffers;

      console.log(userOffers);

      const userAuctions = userProducts.filter(product => {
        return (
          product.type === "auction (open)" ||
          product.type === "auction (closed)"
        );
      });
      this.userAuctions = userAuctions;

      console.log(userAuctions, "----------->");
    }
  }
}
