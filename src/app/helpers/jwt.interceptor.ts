import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginService } from '../services/Auth/login.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private serviceLogin: LoginService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = this.serviceLogin.currentUserValue;
    if (currentUser && currentUser.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.access_token}`
        }
      });

      return next.handle(request);
    }


    return next.handle(request).pipe(catchError(err => {
      // if (err.status === 401) {

      //   this.serviceLogin.logout();
      //   location.reload();
      // }

      // const error = err.error.message || err.statusText;
       return throwError(err);
    }))


  }
}
