import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
  selectPositionX = 0;
  selectPositionY = 0;
  inputHeight = 0;
  inputWidth = 0;
  verticalOffset = 0;
  selectShow = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSelect(event: any) {
      console.log(event.target);
      this.inputHeight = event.target.clientHeight;
      this.inputWidth = event.target.clientWidth;
      this.selectPositionX = event.target.offsetLeft;
      this.selectPositionY = event.target.offsetTop - window.pageYOffset;
      this.selectShow = true;
  }

  onExit(event: any) {
    console.log('exit');
    this.selectShow = false;
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    this.verticalOffset = window.pageYOffset || document.body.scrollTop || 0;
}

}
