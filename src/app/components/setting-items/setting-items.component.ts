import { Component, OnInit } from '@angular/core';
import { Setting } from '../../models/Setting'

@Component({
  selector: 'app-setting-items',
  templateUrl: './setting-items.component.html',
  styleUrls: ['./setting-items.component.scss']
})
export class SettingItemsComponent implements OnInit {
  settings: Setting[];

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
