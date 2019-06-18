import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductDetailsModalComponent } from 'src/app/public/home/product-details-modal/product-details-modal.component';
import { PromotionDTO } from '../models/promotionDTO';
import {AlertModalComponent} from '../../alert-modal/alert-modal.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PromotionControllerService, BookControllerService } from '../api/api.';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  ClientConnected = false;
  bookForm: FormGroup;

  @Input() icon: string;
  @Input() title: string;
  @Input() referenceProduct: string;
  @Input() description: string;
  @Input() price: number;
  @Input() newPrice: number;
  @Input() limitDatePromotion: Date;
  @Input() limitTimeWithdrawPromotion: number;
  @Input() quantityAvailable: number;

  @Input() idPromotion: number;
  @Input() promotion: PromotionDTO;

  bsModalRef: BsModalRef;
  alertModalComponent: AlertModalComponent;

  constructor(private modalService: BsModalService, private promotionService: PromotionControllerService,
              private bookService: BookControllerService, private formBuilder: FormBuilder,
              private router: Router, private route: ActivatedRoute) {}

  counter(i: number) {
    return new Array(i);
  }

  openModalWithComponent() {

    console.log(this.idPromotion);
    console.log(this.promotion);
    sessionStorage.setItem('latitudeCommerce', this.promotion.shopList[0].address.coordinates.latitude.toString());
    sessionStorage.setItem('longitudeCommerce', this.promotion.shopList[0].address.coordinates.longitude.toString());
    sessionStorage.setItem('idPromotion', this.idPromotion.toString());
    const initialState = {
      list: [
       this.promotion.id,
       this.promotion.description,
       this.promotion.product.image,
       this.promotion.name,
       this.promotion.product.referenceProduct.name,
       this.promotion.initPrice,
       this.promotion.priceAfterPromotion,
       this.promotion.endDate,
       this.promotion.limitTimeTakePromotion,
       this.promotion.quantityRemaining,
       this.promotion.shopList[0].name,
       this.promotion.shopList[0].address.number,
       this.promotion.shopList[0].address.addressType.name,
       this.promotion.shopList[0].address.complement,
       this.promotion.shopList[0].address.name,
       this.promotion.shopList[0].address.city.name,
       this.promotion.shopList[0].address.city.postalCode
      ],
      title: this.promotion.name,
      description : this.promotion.description,
      image: this.promotion.product.image,
      path: "assets/img/products/",
      referenceProduct: this.promotion.product.referenceProduct.name,
      price: this.promotion.initPrice.toFixed(2),
      newPrice: this.promotion.priceAfterPromotion.toFixed(2),
      limitDatePromotion: this.promotion.endDate,
      limitTimeWithdrawPromotion: stringify(this.promotion.limitTimeTakePromotion).replace('PT', ' ').replace('H', ' Heures ').replace('M', ' Minutes ').replace('S', ' secondes '),
      quantityAvailable: this.promotion.quantityRemaining,
      shopName: this.promotion.shopList[0].name,
      shopAdresseStreetNumber: this.promotion.shopList[0].address.number,
      shopAdresseStreetComplement: this.promotion.shopList[0].address.complement,
      shopAdresseStreetTypeName: this.promotion.shopList[0].address.addressType.name,
      shopAdresseStreetName: this.promotion.shopList[0].address.name,
      shopAdressePostalCode: this.promotion.shopList[0].address.city.postalCode,
      shopAdresseCity: this.promotion.shopList[0].address.city.name,

      counter(i: number) {
        return new Array(i);
      }
    };

    this.bsModalRef = this.modalService.show(ProductDetailsModalComponent, {initialState, class: 'modal-lg'});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  //test bouton alert du component alert-modal
  // AlertModalComponent(){

  //   this.bsModalRef = this.modalService.show(this.alertModalComponent);

  // }

  // constructor() { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      quantitySelected: []
    });
    this.IsConnected();
    // let limitTimeWithdrawPromotionFormatted: string;
    // limitTimeWithdrawPromotionFormatted = stringify(this.promotion.limitTimeTakePromotion).replace('PT', ' ').replace('H', ' Heures ').replace('M', ' Minutes ').replace('S', ' secondes ');
    // console.log('nicolas test : ' + limitTimeWithdrawPromotionFormatted);
  }

  IsConnected() {
    if (sessionStorage.getItem('type') === 'CLIENT') {
      this.ClientConnected = true;
    } else {
      this.ClientConnected = false;
    }
  }

  onSubmit() {
    console.log('dedans');
    const quantitSelected = this.bookForm.get('quantitySelected').value;
    console.log(quantitSelected);
    this.bookService
    .bookUsingPOST(this.promotion.id, (+(quantitSelected)), (+(sessionStorage.getItem('userConnecte'))) )
    .subscribe(
      () => {this.router.navigate(['/mybookings']); }
       ,
      (error) => {this.router.navigate(['/mybookings']); }
    );
}

}
