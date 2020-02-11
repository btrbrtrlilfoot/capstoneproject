import { Component, OnInit, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuctionConfirmationComponent } from "../auction-confirmation/auction-confirmation.component";
import {
  DropzoneComponent,
  DropzoneDirective,
  DropzoneConfigInterface
} from "ngx-dropzone-wrapper";

//create bid instance here
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

  ngOnInit() {}

  onKindSelected(value: string) {
    this.kind = value;
  }

  onSubmit() {
    let form = this.auctionForm.value;
    form.userId = this.id;
    form.imageUrl = this.imageUrl;
    form.kind = this.kind;

    console.log("forrmmmm", form.userId);
    this.http.post("/api/products", form).subscribe(
      (data: any) => {
        this.auction = data;
        console.log("biddddd", this.auction);
        // this.router.navigate(["/auction/confirm", { auction: this.auction }]);
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
}
