import { Component, Input, OnInit } from '@angular/core';

import { GamesService } from 'src/app/services/games/games.service';
import { IDataCarousel } from './../../../modules/idata-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() dataGame: IDataCarousel[];
  @Input() controls = true;

  selectedIndex = 0;
  id: IDataCarousel[];

  constructor() { }


  ngOnInit(): void {
    // console.log(this.dataGame);
    // this.gamesService.getGames().subscribe(games => {
    //   this.id = games.filter(gamesId => gamesId.id)
    //   console.log('TESTE:', this.id)
    // })
  }

  getGameId() {
    this.id = this.dataGame.filter(gamesId =>
      console.log('TESTE:', gamesId.id))
  }

  onNextClick(): void {
    if(this.selectedIndex === this.dataGame.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
