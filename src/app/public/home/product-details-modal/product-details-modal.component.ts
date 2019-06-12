import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html'
})
export class ProductDetailsModalComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }

}
