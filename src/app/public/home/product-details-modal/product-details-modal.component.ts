import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Promotion } from 'src/app/shared/models/models';
import { PromotionControllerService } from 'src/app/shared/api/promotionController.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookControllerService } from 'src/app/shared/api/api.';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html'
})
export class ProductDetailsModalComponent implements OnInit {

  bookForm: FormGroup;
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
  ClientConnected: boolean;

  constructor(public bsModalRef: BsModalRef, private promotionService: PromotionControllerService,
              private bookService: BookControllerService, private formBuilder: FormBuilder,
              private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      quantitySelected: []
    });
    this.shoplat = +(sessionStorage.getItem('latitudeCommerce'));
    this.shoplong = +(sessionStorage.getItem('longitudeCommerce'));
    this.initMap( this.shoplong, this.shoplat);
    this.distance(this.xA, this.yA, this.shoplong, this.shoplat);
    this.IsConnected();

      }


      onSubmit() {
        console.log('dedans');
        const quantitSelected = this.bookForm.get('quantitySelected').value;
        console.log(quantitSelected);
        this.bookService
        .bookUsingPOST((+(sessionStorage.getItem('idPromotion'))), (+(quantitSelected)), (+(sessionStorage.getItem('userConnecte'))) )
        .subscribe(
          () => {this.router.navigate(['/mybookings']); }
           ,
          (error) => {this.bsModalRef.hide();
                      this.router.navigate(['/mybookings']); }
        );
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

      IsConnected() {
        if (sessionStorage.getItem('type') === 'CLIENT') {
          this.ClientConnected = true;
        } else {
          this.ClientConnected = false;
        }
      }

  }

