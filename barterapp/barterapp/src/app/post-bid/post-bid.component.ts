import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
//create bid instance here
@Component({
  selector: 'app-post-bid',
  templateUrl: './post-bid.component.html',
  styleUrls: ['./post-bid.component.css']
})
export class PostBidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createForm()
  }
  createForm()
  {
    this.loginForm = new FormGroup({
      $key: new FormControl(null),
      item: new FormControl(''),
      description: new FormControl('')

  })
}
}
