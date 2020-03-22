import { Injectable } from '@angular/core';
import { Giftcard } from '../models/Giftcard';

@Injectable({
  providedIn: 'root'
})
export class GiftcardsService {

  constructor() { }

  getGiftcards():Giftcard[]{
    return[
      {
        value:"50 $",
        imgSrc: ""
      },
      {
        value:"25 $",
        imgSrc: ""
      },
      {
        value:"500 $",
        imgSrc: ""
      },
      {
        value:"100 $",
        imgSrc: ""
      },
      {
        value:"75 $",
        imgSrc: ""
      },
      

    ]
  }
}
