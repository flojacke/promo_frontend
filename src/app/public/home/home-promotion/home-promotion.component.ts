import { Component, OnInit } from '@angular/core';
import { Promotion } from 'src/app/shared/models/models';
import { CatalogControllerService } from 'src/app/shared/api/api';
import { Subscription } from 'rxjs';
import { HomeBannerComponent } from '../home-banner/home-banner.component';

@Component({
  selector: 'app-home-promotion',
  templateUrl: './home-promotion.component.html',
  styles: []
})
export class HomePromotionComponent implements OnInit {
 promotions: Promotion[];
 promoSubscription: Subscription;
  products;

  constructor(private catalogService: CatalogControllerService, //private homeBannerComponent: HomeBannerComponent
    ) { }

  getAllPromotions() {
    //initialise par la methode du service les promotions par les data qui sont récupéré
    this.promoSubscription = this.catalogService.initCatalogProduitsUsingGET().subscribe(
      (data) => {
        this.promotions = data;
      },
      (err) => {
  }
  );
  }
  updatePromotions() {

     //this.promotions = this.homeBannerComponent.promotions;
     // window.location.reload();
  }

  ngOnInit() {

    //this.getAllPromotions();
    // this.products = [
    //  {
    //   title: 'Manette PS4',
    //   price: 30,
    //   description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   icon: 'assets/img/manette.jpg'
    //  },
    //  {
    //   title: 'Survêtement du Real Madrid',
    //   price: 20,
    //   description: 'This card has supporting text below as a natural lead-in to additional content.',
    //   icon: 'assets/img/survetementRM.jpg'
    //  },{
    //   title: 'Manette PS4',
    //   price: 30,
    //   description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   icon: 'assets/img/manette.jpg'
    //  },
    //  {
    //   title: 'Survêtement du Real Madrid',
    //   price: 20,
    //   description: 'This card has supporting text below as a natural lead-in to additional content.',
    //   icon: 'assets/img/survetementRM.jpg'
    //  },{
    //   title: 'Manette PS4',
    //   price: 30,
    //   description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   icon: 'assets/img/manette.jpg'
    //  },
    //  {
    //   title: 'Survêtement du Real Madrid',
    //   price: 20,
    //   description: 'This card has supporting text below as a natural lead-in to additional content.',
    //   icon: 'assets/img/survetementRM.jpg'
    //  },{
    //   title: 'Manette PS4',
    //   price: 30,
    //   description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   icon: 'assets/img/manette.jpg'
    //  }
    // ];
  }

}
