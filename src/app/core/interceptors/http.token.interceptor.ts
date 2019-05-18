import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { JwtService } from '../services';
import { tap, catchError } from 'rxjs/operators';
import { MzToastService } from 'ngx-materialize';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private jwtService: JwtService,
    private toastService: MzToastService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = this.jwtService.getToken();

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request).pipe(
      tap(value => {
      }),
      catchError((error: HttpErrorResponse) => {
        this.toastService.show(`${error.statusText} : ${error.error.message}`, 5000, 'red');
        return throwError(error);
      })
    )
  }
}
