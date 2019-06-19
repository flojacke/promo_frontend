import { Component, OnInit } from '@angular/core';
import { ReservationControllerService, ReservationManagementControllerService } from 'src/app/shared/api/api.';
import { Reservation } from 'src/app/shared/models/models';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-management',
  templateUrl: './booking-management.component.html',
  styleUrls: ['./booking-management.component.scss']
})
export class BookingManagementComponent implements OnInit {

  bookedPromoSubscription: Subscription;
  bookedPromoList: Reservation[];
  public code : any = {};

  constructor(private reservationService: ReservationControllerService,
    private reservationManagementControllerService: ReservationManagementControllerService,
    private router: Router) { }

  ngOnInit() {
    this.getBookinglist();
  }

  getBookinglist() {
    let userId = (+(sessionStorage.getItem('userConnected')));
    this.bookedPromoSubscription = this.reservationService.getBookedPromotionListUsingPOST(userId).subscribe(
      (data) => {
        console.log(data);
        this.bookedPromoList = data;
      },
      (err) => { }
    );
  }

  validateBooking(idReservation: number, withDrawalCode: string) {
    this.reservationManagementControllerService.validateReservationUsingPOST(idReservation, withDrawalCode).subscribe(
      (resp) => { this.router.navigate(['/bookingmanagement']); },
      (error) => {this.router.navigate(['/bookingmanagement']); },
      () => { this.router.navigate(['/bookingmanagement']); }
    );
    location.reload();
  }

}
