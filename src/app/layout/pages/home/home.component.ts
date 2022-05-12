import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from '../../../services/games/games.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games$: Observable<any>  // Opção usando observable
  games: any[]


  constructor(private service: GamesService) { }

  ngOnInit(): void {
    this.games$ = this.service.getGames() // Opção usando observable
    this.service.getGames().subscribe(games => {
      console.log(games)
      this.games = games
    });
  }

}
