import { Component, OnInit } from '@angular/core';
import { AuctionService} from '../auction.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auctions: any[] = [];
  constructor(private auctionService: AuctionService) { }

  ngOnInit() {
    this.auctionService.getAuctions().subscribe((data: any[])=>{
      console.log(data);
      this.auctions = data;
    })
  }

}
