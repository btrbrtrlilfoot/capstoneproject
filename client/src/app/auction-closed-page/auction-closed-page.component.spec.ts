import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuctionClosedPageComponent } from "./auction-closed-page.component";

describe("AuctionClosedPageComponent", () => {
  let component: AuctionClosedPageComponent;
  let fixture: ComponentFixture<AuctionClosedPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AuctionClosedPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionClosedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
