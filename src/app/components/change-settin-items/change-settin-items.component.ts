import { Component, OnInit } from '@angular/core';
import { Setting } from 'src/app/models/Setting';

@Component({
  selector: 'app-change-settin-items',
  templateUrl: './change-settin-items.component.html',
  styleUrls: ['./change-settin-items.component.scss']
})
export class ChangeSettinItemsComponent implements OnInit {
  var:Setting

  constructor() { }

  ngOnInit(): void {
    this.var = {
      name: "Felix",
      email: "Blah@Straße",
      address: {
        street: "straße",
        housenumber: "24a",
        postcode: 123,
        city: "stadt",
        longitude: 0,
        latitude: 0
      } 
    }
  }

}
