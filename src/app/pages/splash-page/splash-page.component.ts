import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
  selectPositionX = 200;
  selectPositionY = 500;
  verticalOffset = 0;
  selectShow: true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectPositionX);
  }

  openSelect() {
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    this.verticalOffset = window.pageYOffset || document.body.scrollTop || 0;
    console.log(this.verticalOffset);
}

}
