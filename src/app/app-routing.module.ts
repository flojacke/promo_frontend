import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { MybookingsComponent } from './protected/mybookings/mybookings.component';
import { AddPromotionComponent } from './protected/shopkeeper/add-promotion/add-promotion.component';
import { BookingManagementComponent } from './protected/shopkeeper/booking-management/booking-management.component';
import { ProfilComponent } from './protected/profil/profil.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mybookings', component: MybookingsComponent },
  { path: 'addpromotion', component: AddPromotionComponent },
  { path: 'bookingmanagement', component: BookingManagementComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
