import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from '../../../services/games/games.service';

export interface DataSlider {
  id: number;
  img: string;
  link: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games$: Observable<any>; // Opção usando observable
  games: any[];

  slider: DataSlider[];
  popular: DataSlider[];


  constructor(private service: GamesService) {}

  ngOnInit(): void {
    this.games$ = this.service.getGames(); // Opção usando observable
    this.service.getGames().subscribe((games) => {
      console.log(games);
      this.games = games;
    });

    this.service.getSlider().subscribe((slider) => {
      this.slider = slider;

    });
  }
}
