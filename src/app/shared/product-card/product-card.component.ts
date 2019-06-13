import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductDetailsModalComponent } from 'src/app/public/home/product-details-modal/product-details-modal.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: [`.card img {
    margin: auto;
    padding-top: 1em;
    max-width: 60%;
}`]
})
export class ProductCardComponent implements OnInit {

  @Input() description: string;
  @Input() price: number;
  @Input() title: string;
  @Input() icon: string;
  @Input() produit: string;

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
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
