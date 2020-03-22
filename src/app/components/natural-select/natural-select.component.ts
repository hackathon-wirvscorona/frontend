import { Component, OnInit, Input, OnChanges, SimpleChanges, HostListener, ViewChild, ElementRef, 
  AfterViewInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-natural-select',
  templateUrl: './natural-select.component.html',
  styleUrls: ['./natural-select.component.scss']
})
export class NaturalSelectComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() positionX: number;
  @Input() positionY: number;
  @Input() inputWidth: number;
  @Input() inputHeight: number;
  @Input() options: string[];
  @Input() show: boolean;
  @Output() exit = new EventEmitter<boolean>();
  width: number;
  @ViewChild('SelectContainer') select: ElementRef;
  X = 0;
  Y = 0;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event.target']) onClick(btn) {
    if (btn !== this.select.nativeElement) {
      this.exit.emit(true);
    }
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.toggle();
  }

  ngAfterViewInit() {
  }

  toggle() {
    if (this.select) {
      console.log(this.select.nativeElement.clientHeight + '|' + this.select.nativeElement.clientWidth);
      if (this.select.nativeElement.clientWidth < this.inputWidth) {
        this.width = this.inputWidth;
      } else {
        this.width = this.select.nativeElement.clientWidth;
      }
      console.log(this.width);
      this.X = this.positionX + (this.inputWidth / 2) - (this.width / 2);
      this.Y = this.positionY + (this.inputHeight / 2) - (this.select.nativeElement.clientHeight / 2);
    }
  }


}
