import { Component, OnInit } from '@angular/core';
import { Giftcard } from 'src/app/models/Giftcard';
import { GiftcardsService } from 'src/app/services/giftcards.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss']
})
export class StorePageComponent implements OnInit {
  cards:Giftcard[]


  constructor(private giftcardsService:GiftcardsService) { }

  ngOnInit(): void {
    this.cards = this.giftcardsService.getGiftcards();
  }

}
