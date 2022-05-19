import { Component, Input, OnInit } from '@angular/core';

import { IDataCarousel } from './../../../modules/idata-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() dataGame: IDataCarousel[]

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.dataGame);
  }

  onNextClick(): void {
    if(this.selectedIndex === this.dataGame.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
