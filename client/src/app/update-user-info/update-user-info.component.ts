import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "../common/user-profile.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-update-user-info",
  templateUrl: "./update-user-info.component.html",
  styleUrls: ["./update-user-info.component.css"]
})
export class UpdateUserInfoComponent implements OnInit {
  user: any;
  imageUrl: string;
  userUpdateForm: FormGroup;
  sub: any;
  constructor(
    private router: Router,
    private _userProfileService: UserProfileService,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    this.user = await this._userProfileService.getUser();
    console.log("usor", this.user);

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

    console.log("formoo", form);
    this.sub = await this.http.put(`/api/users/`, form).subscribe(
      (data: any) => {
        this.user = data;
        console.log("newuser", this.user);

        // this.router.navigate(["/auction/confirm", { auction: this.auction }]);
      },
      error => {
        console.log("oops", error);
      }
    );
    this.router.navigate(["/home"]);
  }
  change(evt) {
    this.userUpdateForm[evt.target.id] = evt.target.value;
  }
  onUploadSuccess(event) {
    this.imageUrl = event[1].fileName;
    console.log("img", this.imageUrl);
  }

  onUploadError(event) {
    alert("Image uploaded isn't valid");
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    console.log("userdestroy", this.user);
  }
}
