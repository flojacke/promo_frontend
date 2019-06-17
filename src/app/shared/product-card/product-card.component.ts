import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductDetailsModalComponent } from 'src/app/public/home/product-details-modal/product-details-modal.component';
import { PromotionDTO } from '../models/promotionDTO';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  ClientConnected = false;

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
  constructor(private modalService: BsModalService) {}

  counter(i: number) {
    return new Array(i);
  }
  
  openModalWithComponent() {
    console.log(this.idPromotion);
    console.log(this.promotion);
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
       this.promotion.shopList[0].address.city.name
      ],
      title: this.promotion.name,
      description : this.promotion.description,
      image: this.promotion.product.image,
      path: "assets/img/products/",
      referenceProduct: this.promotion.product.referenceProduct.name,
      price: this.promotion.initPrice,
      newPrice: this.promotion.priceAfterPromotion,
      limitDatePromotion: this.promotion.endDate,
      limitTimeWithdrawPromotion: this.promotion.limitTimeTakePromotion,
      quantityAvailable: this.promotion.quantityRemaining,
      shopName: this.promotion.shopList[0].name,
      shopAdresse: this.promotion.shopList[0].address.city.name,

      counter(i: number) {
        return new Array(i);
      }
    };
    this.bsModalRef = this.modalService.show(ProductDetailsModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  // constructor() { }

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
