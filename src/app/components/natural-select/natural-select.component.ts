import { Component, OnInit, Input, OnChanges, SimpleChanges, HostListener } from '@angular/core';

@Component({
  selector: 'app-natural-select',
  templateUrl: './natural-select.component.html',
  styleUrls: ['./natural-select.component.scss']
})
export class NaturalSelectComponent implements OnInit, OnChanges {
  @Input() positionX: number;
  @Input() positionY: number;
  @Input() options: string[];
  @Input() show: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges) {
  }


}
