import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { AuctionService } from '../auction.service';

//create bid instance here
@Component({
  selector: 'app-postAuction',
  templateUrl: './postAuction.component.html',
  styleUrls: ['./postAuction.component.css']
})
export class PostAuctionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private auctionService: AuctionService) {}

  ngOnInit() {

  }


  newAuction = new FormGroup({
    $key: new FormControl(null),
    item: new FormControl(''),
    description: new FormControl('')

  })

  onSubmit()  {
    console.log(this.newAuction.value)
    this.auctionService.postAuction(this.newAuction.value)
      .subscribe(
        response => console.log('success',response),
        error => console.error('error!',error)
      )
  }
}

