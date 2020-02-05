import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuctionConfirmationComponent } from "./auction-confirmation.component";

describe("BidConfirmationComponent", () => {
  let component: AuctionConfirmationComponent;
  let fixture: ComponentFixture<AuctionConfirmationComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AuctionConfirmationComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
