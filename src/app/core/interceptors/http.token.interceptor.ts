import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { JwtService } from '../services';
import { tap, catchError } from 'rxjs/operators';
import { MzToastService } from 'ngx-materialize';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private jwtService: JwtService,
    private toastService: MzToastService,
    private spinner: NgxSpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();

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
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      }),
      catchError((error: HttpErrorResponse) => {
        this.toastService.show(`${error.statusText} : ${error.error.message}`, 5000, 'red');
        return throwError(error);
      })
    )
  }
}
