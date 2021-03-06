import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}
  profile = environment.profile;
  currentUser: any;

  logout() {
    this.userService.purgeAuth();
  }
  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
}
