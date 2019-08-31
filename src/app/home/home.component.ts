import { Component, OnInit } from '@angular/core';
import { UserService } from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  constructor(
    private userService: UserService
  ) { }
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
