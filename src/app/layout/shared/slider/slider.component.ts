import { Component, Input, OnInit } from '@angular/core';

import { IDataSlider } from 'src/app/modules/idata-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() data: IDataSlider[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
