import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostBidComponent } from './post-bid/post-bid.component';
import { BidConfirmationComponent } from './bid-confirmation/bid-confirmation.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {BackendService} from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PostBidComponent,
    BidConfirmationComponent,
    SignupComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(BackendService)
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
