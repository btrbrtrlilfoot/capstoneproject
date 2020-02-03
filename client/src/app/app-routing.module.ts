import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PostAuctionComponent } from './post-auction/post-auction.component';
import { AuctionConfirmationComponent } from './auction-confirmation/auction-confirmation.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { AuctionofferViewComponent } from './auctionoffer-view/auctionoffer-view.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auction', component: PostAuctionComponent },
  { path: 'auction/confirm', component: AuctionConfirmationComponent },
  { path: 'offerform', component: OfferFormComponent },
  {path: 'auction/confirm', component: AuctionConfirmationComponent}, {path: 'auctions/:id', component: AuctionofferViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
