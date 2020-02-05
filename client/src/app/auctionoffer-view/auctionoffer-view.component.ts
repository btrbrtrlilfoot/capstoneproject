import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuctionViewService } from "./auctionoffer-view.service";

@Component({
  selector: "app-auctionoffer-view",
  templateUrl: "./auctionoffer-view.component.html",
  styleUrls: ["./auctionoffer-view.component.css"]
})
export class AuctionofferViewComponent implements OnInit {
  //These Are States, you can call them in your HTML as their variable names
  id: number;
  offers: any;
  auction: any;
  auctionStatus: string;
  buttonDisable: boolean;
  userId: number =  1;
  selectedOffer: number;
  private sub: any;
  //Activated Route is to pull the link name of a component and any exported information .... i think. I think you need Router for some reason.
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private auctionView: AuctionViewService
  ) {}

  ngOnInit() {
    //This is to pull the id of the auction from the link.
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      //the + is to coerce it from string to numerical
    }); //Get URL Id

    this.auctionView.getAuctionProducts(this.id).subscribe(data => {
    //service function. lets me access the data returned by my http req
      this.auction = data;
     //This redirects the user away from looking up offers under the Auction url
     if(this.auction.type !== 'auction (closed)' && this.auction.type !== 'auction (open)'){
      this.router.navigateByUrl('/');
     }

        this.offers = data.Offer; //offers array on auction

        //this checks to see if the auction is open, and if so, allows you to select
        if (this.auction.type === "auction (open)") {
          this.auctionStatus = "open";
          this.buttonDisable = false;
        } else {
          this.auctionStatus = "closed";
          this.buttonDisable = true;
        }
      },
      error => console.log("theres been an error")
    );
  }
  //confirms offer as submitted when button is click
  onSubmit(offerId) {
    this.auctionView.selectOffer(this.id, offerId).subscribe(
      data => {
        this.offers = data.Offer; //should be updated
        this.auction = data; //should be updatd
        this.auctionStatus = "closed";
        this.buttonDisable = true;
        this.router.navigateByUrl(`/auctions/${this.id}/success`);
      },
      error => console.log("theres been an error")
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
