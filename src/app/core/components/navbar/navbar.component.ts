import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})

export class NavbarComponent implements OnInit {

  ClientConnected = false;
  IsClient : boolean;

  constructor() { }

  ngOnInit() {
    this.isConnected();
    this.getUserType();
  }

  goToShopkeeperView() {
    window.location.href = 'http://localhost:8081/invite/connexion/connexion.xhtml';
  };

  isConnected() {
    if (sessionStorage.getItem('userConnected')) {
      this.ClientConnected = true;
    }
  }

  getUserType() {
    if (sessionStorage.getItem('type') === 'CLIENT') {
      this.IsClient = true;
    } else if (sessionStorage.getItem('type') === 'CLIENT') {
      this.IsClient = false;
    }
  }

  logout() {
    sessionStorage.clear();
  }
}
