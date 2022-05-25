import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from '../../../services/games/games.service';
import { IDataCarousel } from './../../../modules/idata-carousel';
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
  freeGame: IDataCarousel[];

  constructor(private service: GamesService) {}

  ngOnInit(): void {
    // this.games$ = this.service.getGames() // Opção usando observable

    this.service.getSlider().subscribe((slider) => {
      this.slider = slider;
    });

    this.service.getGames().subscribe((games) => {
      // ---- Exemplo de filtro sem o metodo getDataSlider
      // this.upcomingDiscount = games.filter(
      //   (gamesDiscount) =>
      //     gamesDiscount.type === 'upcoming' && gamesDiscount.discount > 0
      // );

      this.getDataSlider('news', games, false);
      this.getDataSlider('popular', games, false);
      this.getDataSlider('upcoming', games, false);
      this.getDataSlider('upcomingDiscount', games, true);
      this.getDataSlider('freeGame', games, false);
    });
  }

  getDataSlider(list, data, discount): void {
    this[list] = data.filter((i) =>
      i.type === list && discount == false ? i.discount === 0 : i.discount > 0
    );
  }
}
