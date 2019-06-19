import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  UserId: String;

  constructor() { }

  ngOnInit() {
    this.getUserType();
  }

  getUserType() {
    this.UserId = sessionStorage.getItem('userConnected');
  }

}
