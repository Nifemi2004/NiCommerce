import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = sessionStorage.getItem('accessToken');

    const _request = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(_request).pipe(
      catchError(error => {
        if(error.status === 401){
          return this.refreshAccessTokenAndRetry(_request, next);
        }else{
          return throwError(error)
        }
      })
    );
  }

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  private refreshAccessTokenAndRetry(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = sessionStorage.getItem('accessToken')

    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshAccessToken().pipe(
        switchMap(() => {
          const updatedRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`
            }
          });

          this.isRefreshing = false;
          this.refreshTokenSubject.next(accessToken);

          return next.handle(updatedRequest);
        }),
        catchError(error => {
          this.isRefreshing = false;
          // Handle refresh token expiration or other errors
          return throwError(error);
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(() => {
          const updatedRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`
            }
          });

          return next.handle(updatedRequest);
        })
      );
    }
  }
}

