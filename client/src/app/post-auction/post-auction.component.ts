import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";
import { UserProfileService } from "../common/user-profile.service";

@Component({
  selector: "app-post-auction",
  templateUrl: "./post-auction.component.html",
  styleUrls: ["./post-auction.component.css"]
})
export class PostAuctionComponent implements OnInit {
  id: number;
  auction: any;
  private sub: any;
  imageUrl: string;
  kind: string = "item";
  user: any;
  name: string;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  constructor(
    private _userProfileService: UserProfileService,
    private http: HttpClient,
    private router: Router
  ) {}

  auctionForm = new FormGroup({
    $key: new FormControl(null),
    item: new FormControl(""),
    description: new FormControl(""),
    tags: new FormControl(""),
    imageUrl: new FormControl(""),
    kind: new FormControl("")
  });

  async ngOnInit() {
    this.user = await this._userProfileService.getUser();
    if (!this.user.id) {
      this.router.navigate(["signup"]);
    }
  }

  onKindSelected(value: string) {
    this.kind = value;
  }

  onSubmit() {
    let form = this.auctionForm.value;
    form.userId = this.id;
    form.imageUrl = this.imageUrl;
    form.kind = this.kind;

    this.http.post("/api/products", form).subscribe(
      (data: any) => {
        this.auction = data;
        this.name = data.name;
      },
      error => {
        console.log("oops", error);
      }
    );
  }

  onUploadSuccess(event) {
    this.imageUrl = event[1].fileName;
  }

  onUploadError(event) {
    alert("Image uploaded isn't valid");
  }

  goBack() {
    this.router.navigate(["home"]);
  }
}
