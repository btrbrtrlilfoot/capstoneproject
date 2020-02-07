import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { PostAuctionComponent } from "./post-auction/post-auction.component";
import { AuctionConfirmationComponent } from "./auction-confirmation/auction-confirmation.component";
import { SignupComponent } from "./signup/signup.component";
import { OfferFormComponent } from "./offer-form/offer-form.component";
import { HttpClientModule } from "@angular/common/http";
import { AuctionofferViewComponent } from "./auctionoffer-view/auctionoffer-view.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatRadioModule } from "@angular/material/radio";
import { SingleOfferComponent } from "./single-offer/single-offer.component";
import { AuctionClosedPageComponent } from "./auction-closed-page/auction-closed-page.component";
import { UserProfileComponent } from "./userprofile/userprofile.component";
import { TransactionHistoryComponent } from "./transaction-history/transaction-history.component";
import { LogoutComponent } from "./logout/logout.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostAuctionComponent,
    AuctionConfirmationComponent,
    SignupComponent,
    OfferFormComponent,
    AuctionofferViewComponent,
    SingleOfferComponent,
    AuctionClosedPageComponent,
    LogoutComponent,
    UserProfileComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
