import { Component, OnInit } from '@angular/core';
import { BidService} from '../bid.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bids: any[] = [];
  constructor(private bidService: BidService) { }

  ngOnInit() {
    this.bidService.getBids().subscribe((data: any[])=>{
      console.log(data);
      this.bids = data;
    })
  }

}
