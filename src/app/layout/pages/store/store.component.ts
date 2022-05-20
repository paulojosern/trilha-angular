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
  priceList = [];
  systemList = [];

  constructor(private service: GamesService) {}

  ngOnInit(): void {
    this.games$ = this.service.getGames();
    this.service.getGames().subscribe((games) => {
      console.log(games);
      this.games = games;
      this.gamesBackup = games;
    });
  }

  onChangePrice(value, e): void {
    e.target.checked
      ? this.priceList.push(value)
      : (this.priceList = this.priceList.filter((i) => i !== value));

    this.games = !this.priceList.length
      ? this.gamesBackup
      : this.gamesBackup.filter((i) =>
          this.priceList.some((a) => a > i.amount)
        );
  }

  // Metodo que recebe um sistema para aplicar no filtro

  //  --- system  = sistema operacional que deve ser colocado no filtro
  //  --- e       = dados do evento (checkbox marcada/desmarcada)

  onChangeSystem(system, e): void {
    // verifica a propriedade target.checked do evento,
    // TRUE o checkbox está marcado,
    // FALSE o checkbox não está marcado

    e.target.checked
      ? // se estiver marcado, coloque o sistema selecionado na lista do filtro
        this.systemList.push(system)
      : // se for desmarcado, remova o sistema da lista de filtro
        (this.systemList = this.systemList.filter((s) => s !== system));

    // atualizando a lista que está sendo rendenizada

    // verificado se a lista de sistemas do filtro estiver vazia
    this.games = !this.systemList.length
      ? // se vazia, atribuir a lista GamesBackup que contem toda a lista de jogos completa
        this.gamesBackup
      : // se possuir algum sistema no filtro ele verifica, jogo a jogo e insere na lista para exibir
        this.gamesBackup.filter((game) =>
          // verifica se o sistema do jogo é o mesmo da lista
          this.systemList.some((s) => s === game.system)
        );
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
    });
  }

  onSearch(e): void {
    const result = this.gamesBackup.filter((i) =>
      i.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.games = !result?.length ? this.gamesBackup : result;
  }
}
