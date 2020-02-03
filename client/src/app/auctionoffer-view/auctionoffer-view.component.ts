import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auctionoffer-view',
  templateUrl: './auctionoffer-view.component.html',
  styleUrls: ['./auctionoffer-view.component.css']
})
export class AuctionofferViewComponent implements OnInit {
  id: number;
  offers: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router ) {

   }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
    this.http.get(`/api/auctions/${this.id}`).subscribe((data:any) => {
      this.offers = data;
    }, error => { console.log('oops', error)})
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

