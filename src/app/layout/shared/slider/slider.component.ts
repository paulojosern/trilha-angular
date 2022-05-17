import { Component, Input, OnInit } from '@angular/core';
import { DataSlider } from '../../pages/home/home.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() data: DataSlider[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
