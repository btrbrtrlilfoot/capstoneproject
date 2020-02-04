import { Component } from '@angular/core';
import { Offer } from './offer';
import { OffersService } from './offers.service';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent {
  offerModel = new Offer('', 'service', '');

  constructor(private _offerService: OffersService) {}

  onSubmit() {
    this._offerService.postOffer(this.offerModel, 1).subscribe(
      data => console.log('We posted successfully'),
      error => console.log('There was an error')
    );
    console.log(this.offerModel);
  }
}
