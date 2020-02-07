import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { PostAuctionComponent } from "./post-auction/post-auction.component";
import { AuctionConfirmationComponent } from "./auction-confirmation/auction-confirmation.component";
import { OfferFormComponent } from "./offer-form/offer-form.component";
import { SingleOfferComponent } from "./single-offer/single-offer.component";
import { AuctionofferViewComponent } from "./auctionoffer-view/auctionoffer-view.component";
import { UserProfileComponent } from "./userprofile/userprofile.component";
import { TransactionHistoryComponent } from "./transaction-history/transaction-history.component";
import { LogoutComponent } from "./logout/logout.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "logout", component: LogoutComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomeComponent },
  { path: "auction", component: PostAuctionComponent, pathMatch: "full" },
  { path: "auction/confirm", component: AuctionConfirmationComponent },
  { path: "auction/:id", component: AuctionofferViewComponent },
  { path: "offerform", component: OfferFormComponent },
  { path: "auction/:auctionId/offer/:id", component: SingleOfferComponent },
  { path: "profile/:id", component: UserProfileComponent },
  { path: "history", component: TransactionHistoryComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
