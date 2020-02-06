import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @Input() user: LoginComponent;
  bids: [];
  searchText: string;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.get("/api/products").subscribe(
      (data: any) => {
        this.bids = data;
        console.log("An array of bids", this.bids);
      },
      error => {
        console.log("oops", error);
      }
    );
  }
}
