import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from '../../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    const user = JSON.parse(localStorage.getItem('won_currentUser')) // estamos pegando o user salvo na localStorage
    this.currentUserSubject = new BehaviorSubject<User>(user); // um BehaviorSubject precisa receber um valor ("Por isso estamos passando 'user'")
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // o jwt.interceptor faz a chamada desse get
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  setCurrentUserValue(user: User): void {
    this.currentUserSubject.next(user);
    localStorage.setItem('won_currentUser', JSON.stringify(user));
  }


  login(email: string, password: string) {
    return this.http.post<any>(`http://localhost:8000/auth/login`, { email, password })
      .pipe(map(user => {
        console.log(user);
        // login successful if there's a jwt token in the response
        if (user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          const u = {
            ...user,
            email
          }

          this.setCurrentUserValue(u)
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('won_currentUser');
    this.currentUserSubject.next(null);
  }
}
