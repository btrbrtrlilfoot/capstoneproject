import { TestBed } from '@angular/core/testing';

import { SingleOfferService } from './single-offer.service';

describe('SingleOfferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleOfferService = TestBed.get(SingleOfferService);
    expect(service).toBeTruthy();
  });
});
