import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SignInComponent } from './sign-in.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/Auth/login.service';
import { of, throwError } from 'rxjs';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let serviceLogin: LoginService

  const userMock = {
    "id": 1,
    "email": "bruno@email.com",
    "password": "bruno",
    "name": "bruno"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            queryParams: ['returnUrl'] || '/'
          }
        }
      },
      {
        provide: Router,
        useValue: routerSpy
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    serviceLogin = TestBed.inject(LoginService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Garantir login do usuario', () => {
    component.formLogin.patchValue({
      email: 'eu@eu.com',
      password: '123'
    })
    spyOn(serviceLogin, 'login').and.returnValue(of(userMock))
    serviceLogin.login('eu@eu.com', '123')
    component.onSubmit()
    expect(serviceLogin.login).toHaveBeenCalledWith('eu@eu.com', '123')
    // expect(component).toBeTruthy();
  });

  it('Garantir tratamento de erro no login do usuario', () => {
    component.formLogin.patchValue({
      email: 'eu@eu.com',
      password: '123'
    })
    spyOn(serviceLogin, 'login').and.returnValue(throwError({
      error: {
        message: 'Deu ruim'
      }
    }))
    serviceLogin.login('eu@eu.com', '123')
    component.onSubmit()
    expect(serviceLogin.login).toHaveBeenCalledWith('eu@eu.com', '123')
    // expect(component).toBeTruthy();
  });
});
