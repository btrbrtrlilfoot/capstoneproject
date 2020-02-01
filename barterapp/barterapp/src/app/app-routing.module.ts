import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PostBidComponent } from './post-bid/post-bid.component';
import { BidConfirmationComponent } from './bid-confirmation/bid-confirmation.component';


const routes: Routes = [{path: 'login', component: LoginComponent},{path: 'signup', component: SignupComponent},{path: 'home',component: HomeComponent},{path: 'bid', component: PostBidComponent},{path: 'bid/confirm', component: BidConfirmationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
