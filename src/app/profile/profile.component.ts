import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../core';
import { concatMap ,  tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  profile: any;
  currentUser: any;
  isUser: boolean;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      data => {
        this.currentUser = data;
      }
    )
  }

}
