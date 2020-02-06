import { Component } from "@angular/core";
import { UserProfileService } from "./common/user-profile.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "BetterBartr";
  user = {};

  constructor(private _userProfileService: UserProfileService) {}

  async ngOnInit() {
    const user = await this._userProfileService.getUser();
    this.user = user;
  }
}
