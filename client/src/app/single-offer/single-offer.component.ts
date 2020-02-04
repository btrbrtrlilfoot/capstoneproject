import { Component, OnInit } from '@angular/core';
import { SingleOfferService } from './single-offer.service'

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.css']
})
export class SingleOfferComponent implements OnInit {

  constructor(private _singleOfferService: SingleOfferService) { }

  ngOnInit() {
    this._singleOfferService.getOffers(1).subscribe( data => {
      return data
    }

    )
  }

}
