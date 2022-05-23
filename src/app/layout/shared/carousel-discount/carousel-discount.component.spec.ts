import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDiscountComponent } from './carousel-discount.component';

describe('CarouselDiscountComponent', () => {
  let component: CarouselDiscountComponent;
  let fixture: ComponentFixture<CarouselDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
