import { Component, Input, OnInit } from '@angular/core';

import { IDataCarousel } from './../../../modules/idata-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() dataGame: IDataCarousel[];

  selectedIndex = 0;
  id: IDataCarousel[];

  constructor() { }

  ngOnInit(): void {
  }

  getGameId(value) {
    const container = document.getElementById('container')
    let content = container.querySelector('div').clientWidth
    content+=80;
    container.scrollBy(value ? content : -content, 0)
  }
}
