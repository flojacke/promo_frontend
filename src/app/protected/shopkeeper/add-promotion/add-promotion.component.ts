import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddPromotionControllerService, ConnectionControllerService, ClientControllerService } from 'src/app/shared/api/api.';
import { ReferenceProduct, Shop, Shopkeeper} from 'src/app/shared/models/models';
import { Subscription } from 'rxjs';
import { CreatePromotionDTO } from 'src/app/shared/models/createPromotionDTO';
import { CreatePromotionDTOimpl } from 'src/app/shared/models/CreatePromotionDTOimpl';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.scss']
})
export class AddPromotionComponent implements OnInit {

  products: ReferenceProduct [];
  shops: Array<Shop>;
  productSubscription: Subscription;
  shopShopkeeperListSubscription: Subscription;
  createPromotionForm: FormGroup;
  // a faire
   requestCreatePromotionObject: CreatePromotionDTO = new CreatePromotionDTOimpl();

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private addPromotionControllerService: AddPromotionControllerService, private shopkeeperService: ClientControllerService) { }

  ngOnInit() {
    this.getAllProductList();
    this.getShopList();
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
    userId = (+(sessionStorage.getItem('userConnected')));
    // recuperer la list des shops problème pour la récuperer
    // tslint:disable-next-line:max-line-length
    this.shopShopkeeperListSubscription = this.shopkeeperService.getUserByIdUsingGET(userId).subscribe( (data: Shopkeeper) => {this.shops = data.shops; console.log(data.shops); } );
    console.log(this.shops);
  }

  getAllProductList() {
    // tslint:disable-next-line:max-line-length
    this.productSubscription = this.addPromotionControllerService.referenceProductListUsingGET().subscribe(data => {this.products = data; });

  }

  onSubmit() {
    console.log('-- Debut test OnSubmit : GetValue --');
    const description = this.createPromotionForm.get('description').value;
    const discountValue = this.createPromotionForm.get('discountValue').value;
    const commerce = this.createPromotionForm.get('idCommerce').value;
    console.log(commerce);
    const idCommerce = commerce.key;
    console.log(idCommerce);
    const isCumulative = false;
    const minPurchaseAmountDiscount = this.createPromotionForm.get('minPurchaseAmountDiscount').value;
    const minPurchaseAmountPercent = this.createPromotionForm.get('minPurchaseAmountPercent').value;
    const numberOffered = this.createPromotionForm.get('numberOffered').value;
    const numberPurchase = this.createPromotionForm.get('numberPurchase').value;
    const percentValue = this.createPromotionForm.get('percentValue').value;
    const product = this.createPromotionForm.get('productId').value;
    const productId = product.id;
    console.log(productId);
    this.products.forEach(element => {
      // tslint:disable-next-line:triple-equals
      if (element.name == this.createPromotionForm.get('productId').value) {
        this.products.push(element);
      }
    });
    const productTakeAwayDuration = this.createPromotionForm.get('productTakeAwayDuration').value;
    const promotionDuration = this.createPromotionForm.get('promotionDuration').value;
    const promotionName = this.createPromotionForm.get('promotionName').value;
    const quantityInitAvailable = this.createPromotionForm.get('quantityInitAvailable').value;
    const typePromotion = this.createPromotionForm.get('typePromotion').value;
    console.log('-- Fin test OnSubmit : GetValue --');
    console.log('-- Debut test OnSubmit : PostValue --');
    this.requestCreatePromotionObject.description = description;
    this.requestCreatePromotionObject.discountValue = discountValue;
    this.requestCreatePromotionObject.idCommerce = idCommerce;
    this.requestCreatePromotionObject.isCumulative = isCumulative;
    this.requestCreatePromotionObject.minPurchaseAmountDiscount = minPurchaseAmountDiscount;
    this.requestCreatePromotionObject.minPurchaseAmountPercent = minPurchaseAmountPercent;
    this.requestCreatePromotionObject.numberOffered = numberOffered;
    this.requestCreatePromotionObject.numberPurchase = numberPurchase;
    this.requestCreatePromotionObject.percentValue = percentValue;
    this.requestCreatePromotionObject.productId = productId;
    this.requestCreatePromotionObject.productTakeAwayDuration = productTakeAwayDuration;
    this.requestCreatePromotionObject.promotionDuration = promotionDuration;
    this.requestCreatePromotionObject.promotionName = promotionName;
    this.requestCreatePromotionObject.quantityInitAvailable = quantityInitAvailable;
    this.requestCreatePromotionObject.typePromotion = typePromotion;
    console.log('-- Fin test OnSubmit : PostValue --');
    // tslint:disable-next-line:max-line-length
    this.productSubscription = this.addPromotionControllerService.createUsingPOST(this.requestCreatePromotionObject, (+(sessionStorage.getItem('userConnected')))).subscribe();


    this.products = [];

// addPromotionControllerService

  }

}
