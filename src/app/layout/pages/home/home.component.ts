import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from '../../../services/games/games.service';
import { IDataCarousel } from './../../../modules/idata-carousel';
import { IDataSlider } from './../../../modules/idata-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games$: Observable<any>  // Opção usando observable
  games: any[]

  slider: IDataSlider[]
  popular: IDataSlider[]
  news: IDataCarousel[]

  constructor(private service: GamesService) { }

  ngOnInit(): void {
    // this.games$ = this.service.getGames() // Opção usando observable
    this.service.getGames().subscribe(games => {
      this.news = games.filter(gamesNews => gamesNews.type === 'news')
      console.log(this.news)
    });



    // this.service.getGames().subscribe(games => {
    //   this.games = games
    //   this.news = games.fiter(item => item.type === 'news')
    //   console.log(this.news)
    // })

    this.service.getSlider().subscribe(slider => {

      this.slider = slider

      this.popular = slider.filter(item => item.type === 'popular')
      console.log(this.popular)
    });
  }
}
