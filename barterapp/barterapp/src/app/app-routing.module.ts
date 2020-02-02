import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PostAuctionComponent } from './postAuction/postAuction.component';
import { AuctionConfirmationComponent } from './auctionConfirmation/auctionConfirmation.component';


const routes: Routes = [{path: 'login', component: LoginComponent},{path: 'signup', component: SignupComponent},{path: 'home',component: HomeComponent},{path: 'auction', component: PostAuctionComponent},{path: 'auction/confirm', component: AuctionConfirmationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
