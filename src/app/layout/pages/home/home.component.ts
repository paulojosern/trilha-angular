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
  popular: IDataCarousel[]
  news: IDataCarousel[]

  constructor(private service: GamesService) { }

  ngOnInit(): void {
    // this.games$ = this.service.getGames() // Opção usando observable

    this.service.getGames().subscribe(games => {
      this.news = games.filter(gamesNews => gamesNews.type === 'news')
      console.log(this.news)

      this.popular = games.filter(gamesPopular => gamesPopular.type === 'popular')
      console.log("TESTE:", this.popular)
    });

    this.service.getSlider().subscribe(slider => {
      this.slider = slider
    });
  }
}
