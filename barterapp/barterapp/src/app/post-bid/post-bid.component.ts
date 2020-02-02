import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { BidService } from '../bid.service';

//create bid instance here
@Component({
  selector: 'app-post-bid',
  templateUrl: './post-bid.component.html',
  styleUrls: ['./post-bid.component.css']
})
export class PostBidComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private bidService: BidService) {}

  ngOnInit() {

  }


  newBid = new FormGroup({
    $key: new FormControl(null),
    item: new FormControl(''),
    description: new FormControl('')

  })

  onSubmit()  {
    console.log(this.newBid.value)
    this.bidService.postBid(this.newBid.value)
      .subscribe(
        response => console.log('success',response),
        error => console.error('error!',error)
      )
  }
}

