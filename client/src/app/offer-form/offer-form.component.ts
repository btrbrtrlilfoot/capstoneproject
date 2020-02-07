import { Component } from "@angular/core";
import { Offer } from "./offer";
import { OffersService } from "./offers.service";

@Component({
  selector: "app-offer-form",
  templateUrl: "./offer-form.component.html",
  styleUrls: ["./offer-form.component.css"]
})
export class OfferFormComponent {
  offerModel = new Offer("", "item", "", null);
  private image = {};
  constructor(private _offerService: OffersService) {}

  onKindSelected(value: string) {
    this.offerModel.kind = value;
  }

  onSubmit() {
    this._offerService
      .postOffer(this.offerModel, 1)
      .subscribe(
        data => console.log("We posted successfully"),
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
