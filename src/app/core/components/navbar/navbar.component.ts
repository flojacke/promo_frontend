import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})

export class NavbarComponent implements OnInit {

ClientConnected = false;


  constructor() { }

  ngOnInit() {
    this.IsConnected();
  }

  IsConnected() {
    if (sessionStorage.getItem('type') === 'CLIENT') {
this.ClientConnected = true;
    } else {
      this.ClientConnected = false;
    }
  }
}
