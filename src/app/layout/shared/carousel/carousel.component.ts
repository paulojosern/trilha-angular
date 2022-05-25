import { Component, Input, OnInit } from '@angular/core';

import { IDataCarousel } from './../../../modules/idata-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() dataGame: IDataCarousel[];
  @Input() name: string;
  @Input() isDiscount: boolean = false;
  @Input() toDisplay: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  scrollBy(value) {
    const container = document.getElementById(this.name + 'container')
    let content = container.querySelector('div').clientWidth
    content += 75;
    container.scrollBy(value ? content : -content, 0)
  }
}
