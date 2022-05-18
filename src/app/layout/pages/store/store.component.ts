import { GamesService } from './../../../services/games/games.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  games$: Observable<any>;
  games: any[];

  constructor(private service: GamesService) {}

  ngOnInit(): void {
    this.games$ = this.service.getGames();
    this.service.getGames().subscribe((games) => {
      console.log(games);
      this.games = games;
    });
  }
}
