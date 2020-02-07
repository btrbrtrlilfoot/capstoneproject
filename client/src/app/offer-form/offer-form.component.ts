import { Component } from "@angular/core";
import { Offer } from "./offer";
import { OffersService } from "./offers.service";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { UserProfileService } from "../common/user-profile.service";

declare var Dropzone: any;

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

  constructor(
    private route: ActivatedRoute,
    private _offerService: OffersService,
    private location: Location,
    private router: Router,
    private userProfileService: UserProfileService
  ) {}

  async ngOnInit() {
    this.user = await this.userProfileService.getUser();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
    });

    let _this = this;
    Dropzone.options.myAwesomeDropzone = {
      init: function() {
        console.log(_this, "THIS IS FROM OFFERFORM");
        this.on("success", function(file, res) {
          _this.offerModel.imageUrl = res.fileName;
          console.log(file, res);
        });
      }
    };
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

  selectImage(event) {
    let files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      this.image = file;
      this._offerService.uploadImages(this.image).subscribe(
        res => {
          this.offerModel.imageUrl = res.fileName;
        },
        err => console.log(err)
      );
    }
  }
}
