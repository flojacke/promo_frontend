import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-promotion',
  templateUrl: './home-promotion.component.html',
  styles: []
})
export class HomePromotionComponent implements OnInit {

  products;

  constructor() { }

  ngOnInit() {
    this.products = [
     {
      title: 'Manette PS4',
      price: 30,
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      icon: 'assets/img/manette.jpg'
     },
     {
      title: 'Survêtement du Real Madrid',
      price: 20,
      description: 'This card has supporting text below as a natural lead-in to additional content.',
      icon: 'assets/img/survetementRM.jpg'
     },{
      title: 'Manette PS4',
      price: 30,
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      icon: 'assets/img/manette.jpg'
     },
     {
      title: 'Survêtement du Real Madrid',
      price: 20,
      description: 'This card has supporting text below as a natural lead-in to additional content.',
      icon: 'assets/img/survetementRM.jpg'
     },{
      title: 'Manette PS4',
      price: 30,
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      icon: 'assets/img/manette.jpg'
     },
     {
      title: 'Survêtement du Real Madrid',
      price: 20,
      description: 'This card has supporting text below as a natural lead-in to additional content.',
      icon: 'assets/img/survetementRM.jpg'
     },{
      title: 'Manette PS4',
      price: 30,
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      icon: 'assets/img/manette.jpg'
     }
    ];
  }

}
