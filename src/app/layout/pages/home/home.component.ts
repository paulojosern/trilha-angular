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

  constructor(private service: GamesService) { }

  ngOnInit(): void {
    // this.games$ = this.service.getGames() // Opção usando observable

    this.service.getGames().subscribe(games => {
      this.news = games.filter(gamesNews => gamesNews.type === 'news')
      console.log(this.news)

      this.popular = games.filter(gamesPopular => gamesPopular.type === 'popular')
      console.log(this.popular)

      this.upcoming = games.filter(gamesUpcoming => gamesUpcoming.type === 'upcoming' && gamesUpcoming.discount === 0);

      this.upcomingDiscount = games.filter(gamesDiscount => gamesDiscount.type === 'upcoming' && gamesDiscount.discount > 0);

      console.log(this.upcoming)
      console.log(this.upcomingDiscount)
    });

    this.service.getSlider().subscribe(slider => {
      this.slider = slider
    });
  }
}
