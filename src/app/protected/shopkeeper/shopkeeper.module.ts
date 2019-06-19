import { NgModule } from '@angular/core';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { BookingManagementComponent } from './booking-management/booking-management.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AddPromotionComponent, BookingManagementComponent, DashboardComponent],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ShopkeeperModule { }
