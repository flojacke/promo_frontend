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
  d: string;

  constructor(public bsModalRef: BsModalRef, private promotionService: PromotionControllerService) {}


  ngOnInit() {


    this.promotion = new PromotionDTO();
    this.idPromotion = sessionStorage.getItem('idPromotion');
    this.promotionService.connectUsingGET(+(this.idPromotion)).subscribe(
      (promotionRecu: Promotion) => {
        this.promotion = promotionRecu;
        this.shoplat = +(this.promotion.shopList[0].address.coordinates.latitude);
        this.shoplong = +(this.promotion.shopList[0].address.coordinates.longitude);
        this.initMap( this.shoplong, this.shoplat);
        this.distance(this.xA, this.yA, this.shoplong, this.shoplat);

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

  initMap(longitude: number, latitude: number){
        if (sessionStorage.getItem('searchlong') == null || sessionStorage.getItem('searchlong') == '0') {
          this.xA = +(sessionStorage.getItem('geoloclong'));
          this.yA = +(sessionStorage.getItem('geoloclat'));
        } else {
          this.xA = +(sessionStorage.getItem('searchlong'));
          this.yA = +(sessionStorage.getItem('searchlat'));
        }

        const pointA =  new google.maps.LatLng( this.yA, this.xA );
        const pointB = new google.maps.LatLng(latitude, longitude);
        const myOptions = {
          zoom: 12,
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

        directionsService.route({
          origin: pointA,
          destination: pointB,
          travelMode: google.maps.TravelMode.WALKING
          },  function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) { //console.log('On affiche ou pas !!!')
            directionsDisplay.setDirections(response);
          } else {
          window.alert('Directions request failed due to ' + status);
          }
          });
      }

      distance(xA, yA, xB, yB) {
        const R = 6371; // km (change this constant to get miles)
        const dLat = (xB - xA) * Math.PI / 180;
        const dLon = (yB - yA) * Math.PI / 180;
        // tslint:disable-next-line:max-line-length
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(xA * Math.PI / 180 ) * Math.cos(xB * Math.PI / 180 ) * Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
        if (d > 1) {
          d = Math.round(d * 100) / 100;
          this.d = d + 'km';
        } else {
            d = Math.round(d * 1000);
            this.d = d + 'm';
        }
      }

  }

