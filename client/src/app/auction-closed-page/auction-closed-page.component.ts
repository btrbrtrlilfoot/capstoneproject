import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-auction-closed-page',
  templateUrl: './auction-closed-page.component.html',
  styleUrls: ['./auction-closed-page.component.css']
})
export class AuctionClosedPageComponent implements OnInit {
  auction: any
  constructor(private route: ActivatedRoute, private router: Router) {
    this.auction = route.data.pipe(map(d => d.auction));
    console.log('got auction', this.auction)
  }

  ngOnInit() {

  }

}
