import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';

@NgModule({
  declarations: [AddPromotionComponent, BookingManagementComponent],
  imports: [
    CommonModule
  ]
})
export class ShopkeeperModule { }
