import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "../common/user-profile.service";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import {
  DropzoneComponent,
  DropzoneDirective,
  DropzoneConfigInterface
} from "ngx-dropzone-wrapper";

@Component({
  selector: "app-update-user-info",
  templateUrl: "./update-user-info.component.html",
  styleUrls: ["./update-user-info.component.css"]
})
export class UpdateUserInfoComponent implements OnInit {
  user: any;
  imageUrl: string;
  userUpdateForm: FormGroup;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  constructor(
    private router: Router,
    private _userProfileService: UserProfileService,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    this.user = await this._userProfileService.getUser();

    this.userUpdateForm = new FormGroup({
      $key: new FormControl(null),
      name: new FormControl(this.user.name),
      email: new FormControl(this.user.email)
    });
    this.imageUrl = this.user.imageUrl;
  }

  async onSubmit() {
    let form = this.userUpdateForm.value;

    form.id = this.user.id;
    form.imageUrl = this.imageUrl;

    this.user = await this.http.put(`/api/users/`, form).subscribe(
      (data: any) => {
        this.user = data;
      },
      error => {
        console.log("oops", error);
      }
    );
    this.router.navigate(["/profile"]);
  }
  change(evt) {
    this.userUpdateForm[evt.target.id] = evt.target.value;
  }
  onUploadSuccess(event) {
    this.imageUrl = event[1].fileName;
  }

  onUploadError(event) {
    alert("Image uploaded isn't valid");
  }
}
