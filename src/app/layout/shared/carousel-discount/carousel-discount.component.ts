import { Component, Input, OnInit } from '@angular/core';

import { IDataCarousel } from 'src/app/modules/idata-carousel';

@Component({
  selector: 'app-carousel-discount',
  templateUrl: './carousel-discount.component.html',
  styleUrls: ['./carousel-discount.component.scss']
})
export class CarouselDiscountComponent implements OnInit {
  @Input() discountGame: IDataCarousel[];

  constructor() { }

  ngOnInit(): void {
  }

  getGame(value) {
    const container = document.getElementById('container-discount')
    let content = container.querySelector('div').clientWidth
    content+=75;
    container.scrollBy(value ? content : -content, 0)
  }

}
