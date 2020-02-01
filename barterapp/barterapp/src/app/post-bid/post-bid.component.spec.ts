import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBidComponent } from './post-bid.component';

describe('PostBidComponent', () => {
  let component: PostBidComponent;
  let fixture: ComponentFixture<PostBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
