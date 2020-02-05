import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "BetterBartr";
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.put("/api/users/:id", {}).subscribe((data: any) => {
      this.user = data;
      console.log("user", this.user);
    });
  }
}
