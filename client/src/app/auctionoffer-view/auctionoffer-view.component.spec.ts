import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionofferViewComponent } from './auctionoffer-view.component';

describe('AuctionofferViewComponent', () => {
  let component: AuctionofferViewComponent;
  let fixture: ComponentFixture<AuctionofferViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionofferViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionofferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
