import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "../common/user-profile.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";
@Component({
  selector: "app-userprofile",
  templateUrl: "./userprofile.component.html",
  styleUrls: ["./userprofile.component.css"]
})
export class UserProfileComponent implements OnInit {
  userOffers: any;
  userAuctions: any;
  user: any = {};
  private sub: any;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private _userProfileService: UserProfileService
  ) {}

  async ngOnInit() {
    this.sub = this.route.params.subscribe(async params => {
      let id = Number(params["id"]);
      const user = await this._userProfileService.getUserById(id);
      this.user = user;

      console.log("UserProfileComponent:ngOnInit:", user);
    });
  }

  onUploadSuccess(event) {
    let img = event[1].fileName;
    console.log("imggg", event);
    this._userProfileService.changePic(img);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
