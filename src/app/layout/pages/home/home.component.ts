import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from '../../../services/games/games.service';
import { IDataCarousel } from './../../../modules/idata-carousel';
import { IDataSlider } from 'src/app/modules/idata-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games$: Observable<any>  // Opção usando observable
  games: any[]

  slider: IDataSlider[]
  news: IDataCarousel[]
  popular: IDataCarousel[]
  upcoming: IDataCarousel[]
  upcomingDiscount: IDataCarousel[]
  freeGame: IDataCarousel[]

  constructor(private service: GamesService) { }

  ngOnInit(): void {
    // this.games$ = this.service.getGames() // Opção usando observable

    this.service.getSlider().subscribe(slider => {
      this.slider = slider
    });

    this.service.getGames().subscribe(games => {
      // News
      this.news = games.filter(gamesNews => gamesNews.type === 'news')
      // Most popular
      this.popular = games.filter(gamesPopular => gamesPopular.type === 'popular')
      // Upcoming
      this.upcoming = games.filter(gamesUpcoming => gamesUpcoming.type === 'upcoming' && gamesUpcoming.discount === 0);
      // Upcoming - Games with discount
      this.upcomingDiscount = games.filter(gamesDiscount => gamesDiscount.type === 'upcoming' && gamesDiscount.discount > 0);
      // Free games
      this.freeGame = games.filter(gamesFree => gamesFree.type === 'free');
    });
  }
}
