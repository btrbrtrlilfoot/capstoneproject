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
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("userhome", this.user);
    this.http.get("/api/products").subscribe(
      (data: any) => {
        this.bids = data;
      },
      error => {
        console.log("oops", error);
      }
    );
  }
}
