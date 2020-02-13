import { Component } from "@angular/core";
import { Offer } from "./offer";
import { OffersService } from "./offers.service";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { UserProfileService } from "../common/user-profile.service";
import {
  DropzoneComponent,
  DropzoneDirective,
  DropzoneConfigInterface
} from "ngx-dropzone-wrapper";

@Component({
  selector: "app-offer-form",
  templateUrl: "./offer-form.component.html",
  styleUrls: ["./offer-form.component.css"]
})
export class OfferFormComponent {
  id: number;
  user: any;
  offerModel = new Offer("", "item", "", null);
  private image = {};
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
    private _offerService: OffersService,
    private location: Location,
    private router: Router,
    private userProfileService: UserProfileService
  ) {}

  async ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
  }

  onKindSelected(value: string) {
    this.offerModel.kind = value;
  }

  onSubmit() {
    this._offerService
      .postOffer(this.offerModel, this.id)
      .subscribe(
        data => this.location.back(),
        error => console.log("There was an error")
      );
    console.log(this.offerModel);
  }

  onUploadSuccess(event) {
    this.offerModel.imageUrl = event[1].fileName;
  }

  onUploadError(event) {
    alert("Image uploaded isn't valid");
  }

  goBack() {
    this.location.back();
  }
}
