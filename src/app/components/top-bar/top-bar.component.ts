import { Component, OnInit, HostListener } from '@angular/core';



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  offsetmargin = 0;
  sticky = 0;
  navbar = null;


  constructor() { }

  ngOnInit(): void {
    this.navbar = document.getElementById("navbar");
    this.sticky = this.navbar.offsetTop;

  }

  @HostListener('window:scroll', []) onWindowScroll() {
    if(this.navbar != null ){
      const verticalOffset = window.pageYOffset || document.body.scrollTop || 0;
      if(verticalOffset > this.sticky){
        this.navbar.classList.add('sticky');
      } else {
        this.navbar.classList.remove('sticky');
      }
    }
  }
}
