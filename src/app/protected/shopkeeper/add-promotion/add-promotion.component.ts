import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddPromotionControllerService } from 'src/app/shared/api/api.';
import { ReferenceProduct } from 'src/app/shared/models/models';
import { Subscription } from 'rxjs';
import { CreatePromotionDTO } from 'src/app/shared/models/createPromotionDTO';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.scss']
})
export class AddPromotionComponent implements OnInit {

  products: ReferenceProduct [];
  productSubscription: Subscription;
  createPromotionForm: FormGroup;
  // a faire
  //requestSearchObject: CreatePromotionDTO = new CreatePromotionDTOimpl();
  
  constructor(private formBuilder: FormBuilder, private addPromotionControllerService: AddPromotionControllerService) { }

  ngOnInit() {
    this.getAllProductList();
    this.createPromotionForm = this.formBuilder.group({
      description: [''],
      discountValue: [''],
      idCommerce: [''],
      isCumulative: false,
      minPurchaseAmountDiscount: [''],
      minPurchaseAmountPercent: [''],
      numberOffered: [''],
      numberPurchase: [''],
      percentValue: [''],
      productId: [''],
      productTakeAwayDuration: [''],
      promotionDuration: [''],
      promotionName: [''],
      quantityInitAvailable: [''],
      typePromotion: ['']


    });
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
    
    const description = this.createPromotionForm.get('description').value;
    const discountValue = this.createPromotionForm.get('discountValue').value;
    const idCommerce = this.createPromotionForm.get('idCommerce').value;
    const isCumulative = false;
    const minPurchaseAmountDiscount = this.createPromotionForm.get('minPurchaseAmountDiscount').value;
    const minPurchaseAmountPercent = this.createPromotionForm.get('minPurchaseAmountPercent').value;
    const numberOffered = this.createPromotionForm.get('numberOffered').value;
    const numberPurchase = this.createPromotionForm.get('numberPurchase').value;
    const percentValue = this.createPromotionForm.get('percentValue').value;
    const productId = this.createPromotionForm.get('productId').value;
    const productTakeAwayDuration = this.createPromotionForm.get('productTakeAwayDuration').value;
    const promotionDuration = this.createPromotionForm.get('promotionDuration').value;
    const promotionName = this.createPromotionForm.get('promotionName').value;
    const quantityInitAvailable = this.createPromotionForm.get('quantityInitAvailable').value;
    const typePromotion = this.createPromotionForm.get('typePromotion').value;

  }

}
