import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostAuctionComponent } from './post-auction/post-auction.component';
import { AuctionConfirmationComponent } from './auction-confirmation/auction-confirmation.component';
import { SignupComponent } from './signup/signup.component';
import { OfferFormComponent } from './offer-form/offer-form.component';
import { HttpClientModule } from '@angular/common/http'
import { AuctionofferViewComponent } from './auctionoffer-view/auctionoffer-view.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostAuctionComponent,
    AuctionConfirmationComponent,
    SignupComponent,
    OfferFormComponent,
    AuctionofferViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
