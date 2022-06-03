import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { GamesService } from 'src/app/services/games/games.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let http: HttpTestingController
  let fixture: ComponentFixture<HomeComponent>;
  let service: GamesService

  const mock = [
    {
      "id": 1,
      "img": "assets/images/banner-home.png",
      "link": "/link",
      "title": "Crashlands",
      "subtitle": "Play the new CrashLands season"
    },
    {
      "id": 2,
      "img": "assets/images/slider-borderlands.jpeg",
      "link": "/link",
      "title": "Borderlands 3",
      "subtitle": "Play the new Borderlands"
    },
    {
      "id": 3,
      "img": "assets/images/slider-valorant.jpg",
      "link": "/link",
      "title": "Valorant",
      "subtitle": "Play the new season"
    },
    {
      "id": 4,
      "img": "assets/images/slider-god-of-war.jpg",
      "link": "/link",
      "title": "God of War",
      "subtitle": "Play the new God of War"
    }
  ]

  const mockGames = [
    {
      "id": 1,
      "image": "assets/images/banner-games/banner-population-zero.png",
      "title": "Population Zero",
      "author": "Rockstar Games",
      "amount": 35.0,
      "discount": 0,
      "img": "assets/images/banner-games/banner-population-zero.png",
      "type": "news",
      "system": "windows",
      "genre": "fps"
    },
    {
      "id": 2,
      "image": "assets/images/banner-games/banner-project-winter.png",
      "title": "Project Winter",
      "author": "Rockstar Games",
      "amount": 15.0,
      "discount": 0,
      "img": " assets/images/banner-games/banner-project-winter.png",
      "type": "news",
      "system": "windows",
      "genre": "adventure"
    }]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    http = TestBed.inject(HttpTestingController)
    service = TestBed.inject(GamesService)

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Garantir que o getSlider está funcionando corretamente', () => {
    spyOn(service, 'getSlider').and.returnValues(of(mock))
    component.getSlider()
    service.getSlider()
    expect(service.getSlider).toHaveBeenCalled()
  });

  it('Garantir que o getGames está funcionando corretamente', () => {
    spyOn(service, 'getGames').and.returnValues(of(mockGames))
    component.getGames()
    service.getGames()
    expect(service.getGames).toHaveBeenCalled()
  });
});
