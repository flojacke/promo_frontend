import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Promotion } from 'src/app/shared/models/models';
import { PromotionDTO } from 'src/app/shared/models/promotionDTO';
import { PromotionControllerService } from 'src/app/shared/api/promotionController.service';

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html'
})
export class ProductDetailsModalComponent implements OnInit {

  title = 'hello';
  closeBtnName: string;
  list: any[] = [];
  promotion: Promotion;
  idPromotion: string;
  xA: number;
  yA: number;
  shoplat: number;
  shoplong: number;
  constructor(public bsModalRef: BsModalRef, private promotionService: PromotionControllerService) {}
 

  ngOnInit() {

    this.promotion = new PromotionDTO();
    this.idPromotion = sessionStorage.getItem('idPromotion');
    this.promotionService.connectUsingGET(+(this.idPromotion)).subscribe(
      (promotionRecu: Promotion) => {
        this.promotion = promotionRecu;
        //this.shoplat = +(this.promotion.shops[0].address.coordinates.latitude);
        //this.shoplong = +(this.promotion.shops[0].address.coordinates.longitude);
        this.xA = +(sessionStorage.getItem('geoloclong'));
        this.yA = +(sessionStorage.getItem('geoloclat'));
        const pointA = new google.maps.LatLng(48.8782249, 2.3323418);
        const pointB = new google.maps.LatLng( this.yA, this.xA );
        const myOptions = {
          zoom: 10,
          center: pointA
        };
        const element = document.getElementById('map');
        const map = new google.maps.Map(document.getElementById('map'), myOptions);
        // Instantiate a directions service.
        const directionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer({ map: map });
        const markerA = new google.maps.Marker({
          position: pointA,
          title: "point A",
          label: "A",
          map: map
        });
        const markerB = new google.maps.Marker({
          position: pointB,
          title: "point B",
          label: "B",
          map: map
        });
      }
    );
    this.list.push('PROFIT!!!');
  

    // this.list.push(this.promotion.product.referenceProduct.name);

  }

  isDataLoaded() {
    if (this.promotion.id === +(this.idPromotion)) {
      return true;
    } else {
      return false;
    }
  }

}
