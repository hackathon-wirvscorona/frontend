import { Component, OnInit, Input } from '@angular/core';
import { Giftcard } from 'src/app/models/Giftcard';

@Component({
  selector: 'app-gift-card-preview',
  templateUrl: './gift-card-preview.component.html',
  styleUrls: ['./gift-card-preview.component.scss']
})
export class GiftCardPreviewComponent implements OnInit {
  @Input() giftcard:Giftcard;

  constructor() { }

  ngOnInit(): void {
  }

}
