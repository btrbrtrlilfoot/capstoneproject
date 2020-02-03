import { Component } from '@angular/core';
import { Offer } from './offer';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})

export class OfferFormComponent {
  offerModel = new Offer('do dishes for two hours', 'This is some description about the offer I am making')
}
