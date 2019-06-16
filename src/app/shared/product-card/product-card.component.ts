import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductDetailsModalComponent } from 'src/app/public/home/product-details-modal/product-details-modal.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

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

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  counter(i: number) {
    return new Array(i);
  }
 
  openModalWithComponent() {
    console.log(this.idPromotion);
    sessionStorage.setItem('idPromotion', this.idPromotion.toString());
    const initialState = {
      list: [
       this.idPromotion,
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ProductDetailsModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  // constructor() { }

  ngOnInit() {
  }

}
