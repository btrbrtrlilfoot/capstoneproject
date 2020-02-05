import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
//create bid instance here
@Component({
  selector: "app-post-auction",
  templateUrl: "./post-auction.component.html",
  styleUrls: ["./post-auction.component.css"]
})
export class PostAuctionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  loginForm = new FormGroup({
    $key: new FormControl(null),
    item: new FormControl(""),
    description: new FormControl("")
  });
  onSubmit() {}
}
