
import { Component, OnInit, Output } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AuctionConfirmationComponent} from '../auction-confirmation/auction-confirmation.component';

//create bid instance here
@Component({
  selector: "app-post-auction",
  templateUrl: "./post-auction.component.html",
  styleUrls: ["./post-auction.component.css"]
})
export class PostAuctionComponent implements OnInit {

  id: number;
  auction: any;
  private sub: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router ) { }
  auctionForm = new FormGroup({
    $key: new FormControl(null),
    item: new FormControl(''),
    description: new FormControl(''),
    // kind: new FormControl(null)

  })
  
  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = +params['id'];
    // })
    
   };
    
  
 
    

  onSubmit()  {
    let Form = this.auctionForm.value;
    Form.userId = this.id;
    
    console.log('forrmmmm',Form.userId)
    this.http.post('/api/products', Form).subscribe((data:any) =>  {
      this.auction = data;
      console.log('biddddd',this.auction)
      this.router.navigate(['/auction/confirm', {auction: this.auction}])
    }, error => { console.log('oops', error)})
    
  }


  loginForm = new FormGroup({
    $key: new FormControl(null),
    item: new FormControl(""),
    description: new FormControl("")
  });
  onSubmit() {}
}
