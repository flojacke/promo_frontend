import { Component, OnInit } from '@angular/core';
import { AddPromotionControllerService } from 'src/app/shared/api/api.';
import { ReferenceProduct } from 'src/app/shared/models/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.scss']
})
export class AddPromotionComponent implements OnInit {

  products: ReferenceProduct [];
  productSubscription: Subscription;
  constructor(private addPromotionControllerService: AddPromotionControllerService) { }

  ngOnInit() {
    this.getAllProductList();
  }

  getShopList() {
    let userId: number;

    console.log('getShopList button works');
    // recuperer l'id utilisateur et le + signifie parse du stringtonumber
    userId = (+(sessionStorage.getItem('userConnecte')));
    // recuperer la list des shops problème pour la récuperer

  }

  getAllProductList() {
    this.productSubscription = this.addPromotionControllerService.referenceProductListUsingGET().subscribe(data => {this.products = data; });

  }

  onSubmit() {

  }

}
