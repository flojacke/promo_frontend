import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { HomePromotionComponent } from './home-promotion/home-promotion.component';
import { ProductDetailsModalComponent } from './product-details-modal/product-details-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  entryComponents: [ProductDetailsModalComponent],
  declarations: [HomeComponent, HomeBannerComponent, ProductCardComponent, HomePromotionComponent, ProductDetailsModalComponent],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
