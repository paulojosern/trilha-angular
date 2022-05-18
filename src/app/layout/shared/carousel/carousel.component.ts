import { Component, Input, OnInit } from '@angular/core';

import { IDataCarousel } from './../../../modules/idata-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() data: IDataCarousel[]

  constructor() { }

  ngOnInit(): void {
  }

}
