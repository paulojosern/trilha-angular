import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = 'http://localhost:3000/';

  public getGames(): Observable<any> {
    return this.httpClient.get(this.url + 'games').pipe(tap(console.log))
  }

  public getSlider(): Observable<any> {
    return this.httpClient.get(this.url + 'slider').pipe(tap(console.log))
  }

}
