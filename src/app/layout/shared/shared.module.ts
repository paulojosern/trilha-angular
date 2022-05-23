import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselDiscountComponent } from './carousel-discount/carousel-discount.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CarouselComponent,
    CarouselDiscountComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CarouselComponent,
    CarouselDiscountComponent
  ]
})
export class SharedModule { }
