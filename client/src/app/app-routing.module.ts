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
import { UpdateUserInfoComponent } from "./update-user-info/update-user-info.component";
import { FrontpageComponent } from "./frontpage/frontpage.component";
import { AuctionClosedPageComponent } from "./auction-closed-page/auction-closed-page.component";
import { LoggedOutComponent } from "./logged-out/logged-out.component";


const routes: Routes = [
  {
    path: "",
    component: FrontpageComponent,
    pathMatch: "full",
    runGuardsAndResolvers: "always"
  },
  { path: "logout", component: LogoutComponent },
  { path: "login", component: LoginComponent },
  { path: "loggedOut", component: LoggedOutComponent },
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomeComponent },
  { path: "auction", component: PostAuctionComponent, pathMatch: "full" },
  { path: "auction/confirm", component: AuctionConfirmationComponent },
  { path: "auction/:id", component: AuctionofferViewComponent },
  { path: "auction/:id/offerform", component: OfferFormComponent },
  { path: "auction/:id/success", component: AuctionClosedPageComponent },
  { path: "auction/:auctionId/offer/:id", component: SingleOfferComponent },
  { path: "profile", component: UserProfileComponent, pathMatch: "full" },
  {
    path: "updateUserInfo",
    component: UpdateUserInfoComponent,
    pathMatch: "full"
  },

  { path: "history", component: TransactionHistoryComponent },
  { path: "front", component: FrontpageComponent },
  { path: "**", component: FrontpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
