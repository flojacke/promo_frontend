import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CatalogControllerService } from 'src/app/shared/api/api';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestSearchDTO, CategoryProduct, Promotion } from 'src/app/shared/models/models';
import { Subscription } from 'rxjs';
import { RequestSearchDTOimpl } from 'src/app/shared/models/RequestSearchDTOimpl';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  searchForm: FormGroup;
  requestSearchObject: RequestSearchDTO = new RequestSearchDTOimpl();
  categorys: CategoryProduct [];
  categories: CategoryProduct [] = [];
  promotions: Promotion[];
  promoSubscription: Subscription;
  searchlat: number;
  searchlong: number;
  products;


  constructor(private formBuilder: FormBuilder, private catalogService: CatalogControllerService,
   ) { }

  ngOnInit() {
     this.getAllPromotions();
     this.getCategoriesList();
     this.searchForm = this.formBuilder.group({
      perimeter: [''],
      adresse: [''],
      search: [''],
      categorie: ['']

    });
  }

  getCategoriesList() {
    this.catalogService.initComboboxCategorieUsingGET().subscribe(
      data => {
        this.categorys = data;
    });
}

getAllPromotions() {
  //initialise par la methode du service les promotions par les data qui sont récupéré
  this.promoSubscription = this.catalogService.initCatalogProduitsUsingGET().subscribe(
    (data) => {
      this.promotions = data;
    },
    (err) => {
}
);
}

  onSubmit() {

    const categ = this.searchForm.get('categorie').value.toLowerCase();
    this.categorys.forEach(element => {
      if (element.name.toLowerCase() == this.searchForm.get('categorie').value.toLowerCase() ) {
        console.log(element);
        console.log(this.categories);
        this.categories.push(element);
      }
    });
    const perimeter = this.searchForm.get('perimeter').value;
    const search = this.searchForm.get('search').value;
    const adresse = this.searchForm.get('adresse').value;
    this.requestSearchObject.categories = this.categories;
    this.requestSearchObject.searchField = search;
    if (perimeter =='') {this.requestSearchObject.searchPerimeter = 10;
    } else {this.requestSearchObject.searchPerimeter = perimeter; }
    this.requestSearchObject.searchSourceAddress = adresse;
    console.log(this.requestSearchObject);
    this.catalogService.searchUsingPOST(this.requestSearchObject).subscribe(
      (resp) => {  this.promotions = resp.promotionList;
                   console.log(this.promotions);
                   if (resp.longitude !== 0) {
                    this.searchlong = resp.longitude;
                    this.searchlat = resp.latitude;
                    sessionStorage.setItem('searchlong', this.searchlong.toString() );
                    sessionStorage.setItem('searchlat', this.searchlat.toString() );
        } else {
          sessionStorage.setItem('searchlong', '0' );
          sessionStorage.setItem('searchlat', '0' );
        }
       },
      (error) => { },
      () =>  { 
      }
    );
    this.categories = [];
}

  }

