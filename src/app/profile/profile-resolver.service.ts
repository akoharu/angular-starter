import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProfileResolver implements Resolve <any> {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.userService.getprofile()
      .pipe(catchError((err) => this.router.navigateByUrl('/')));

  }
}
