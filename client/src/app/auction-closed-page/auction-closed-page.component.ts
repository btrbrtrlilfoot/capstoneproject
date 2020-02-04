import { Component, OnInit, Input } from '@angular/core';
import { AuctionViewService } from '../auctionoffer-view/auctionoffer-view.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction-closed-page',
  templateUrl: './auction-closed-page.component.html',
  styleUrls: ['./auction-closed-page.component.css']
})
export class AuctionClosedPageComponent implements OnInit {
  auction: any;
  private sub: any;
  constructor(private auctionView:  AuctionViewService, private router: Router) {
  }

  ngOnInit() {
    this.auction = this.auctionView.returnAuction().subscribe(data => {
      this.auction = data;
    }, error => console.log('error'))


}

}
