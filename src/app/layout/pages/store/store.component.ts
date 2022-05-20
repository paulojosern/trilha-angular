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
  gamesBackup: any[];
  priceList = []

  constructor(private service: GamesService) { }

  ngOnInit(): void {
    this.games$ = this.service.getGames();
    this.service.getGames().subscribe((games) => {
      console.log(games);
      this.games = games;
      this.gamesBackup = games;
    });
  }



  onChange(value, e): void {
    e.target.checked ? this.priceList.push(value) :
      this.priceList = this.priceList.filter(i => i !== value)

    this.games = !this.priceList.length ? (this.games = this.gamesBackup) : this.gamesBackup.filter(i => this.priceList.some(a => a > i.amount))
  }

  onSortBy(e): void {
    this.games.sort((a, b) => {
      if (e) {
        if (a.amount < b.amount) {
          return 1;
        } else if (a.amount > b.amount) {
          return -1;
        } else {
          return 0;
        }
      } else {
        if (a.amount < b.amount) {
          return -1;
        } else if (a.amount > b.amount) {
          return 1;
        } else {
          return 0;
        }
      }
    })
  }

  onSearch(e): void {
    const result = this.gamesBackup.filter(i => i.title.toLowerCase().includes(e.target.value.toLowerCase()))
    this.games = !result?.length ? this.gamesBackup : result
  }
}
