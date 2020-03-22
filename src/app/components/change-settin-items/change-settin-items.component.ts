import { Component, OnInit } from '@angular/core';
import { Setting } from '../../models/Setting'

@Component({
  selector: 'app-change-settin-items',
  templateUrl: './change-settin-items.component.html',
  styleUrls: ['./change-settin-items.component.scss']
})
export class ChangeSettinItemsComponent implements OnInit {
  settings:Setting[]

  constructor() { }

  ngOnInit(): void {
    this.settings = [
      {settingName:"Name", settingValue:"Felix"},
      {settingName:"E-Mail", settingValue:"blah@blah.de"},
      {settingName:"Username", settingValue:"Felix123"},
      {settingName:"Passwort", settingValue:"***********"}
    ]
  }

}
