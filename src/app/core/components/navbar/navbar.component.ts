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

  goToShopkeeperView() {
    window.location.href = 'http://localhost:8081/invite/connexion/connexion.xhtml';
  };

  IsConnected() {
    if (sessionStorage.getItem('type') === 'CLIENT') {
      this.ClientConnected = true;
    } else {
      this.ClientConnected = false;
    }
  }

  logout() {
    sessionStorage.clear();
  }
}
