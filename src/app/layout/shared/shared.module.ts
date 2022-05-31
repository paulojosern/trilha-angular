import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
