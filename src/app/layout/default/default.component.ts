import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { GamesService } from '../../services/games/games.service'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private service: GamesService) { }

  ngOnInit(): void {
    this.service.getGames().pipe(tap(console.log))
  }

}
