import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalArea = 1;
  totalSigns = 1;
  totalSignLocations = 1;
  totalUsers = 1
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

}
