import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from '../../../services/games/games.service';
import { IDataCarousel } from '../../../models/idata-carousel';
import { IDataSlider } from 'src/app/modules/idata-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games$: Observable<any>; // Opção usando observable
  games: any[];

  slider: IDataSlider[];
  news: IDataCarousel[];
  popular: IDataCarousel[];
  upcoming: IDataCarousel[];
  upcomingDiscount: IDataCarousel[];
  free: IDataCarousel[];

  constructor(private service: GamesService) {}

  ngOnInit(): void {
    // this.games$ = this.service.getGames() // Opção usando observable

    this.service.getSlider().subscribe((slider) => {
      this.slider = slider;
    });

    this.service.getGames().subscribe((games) => {
      this.getDataSlider('news', games);
      this.getDataSlider('popular', games);
      this.getDataSlider('upcoming', games);
      this.getDataSlider('upcomingDiscount', games);
      this.getDataSlider('free', games);
    });
  }

  getDataSlider(list, data): void {
    this[list] = data.filter((i) =>{
      // i.type === list && discount === false ? i.discount === 0 : i.discount > 0
      if (i.type === list) {
        if (i.discount > 0) {
          return i;
        }
       return i;
      }
    });
    console.log(this[list])
  }
}
