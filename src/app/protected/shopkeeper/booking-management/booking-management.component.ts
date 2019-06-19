import { Component, OnInit } from '@angular/core';
import { ReservationControllerService } from 'src/app/shared/api/api.';
import { Reservation } from 'src/app/shared/models/models';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking-management',
  templateUrl: './booking-management.component.html',
  styleUrls: ['./booking-management.component.scss']
})
export class BookingManagementComponent implements OnInit {

  bookedPromoSubscription: Subscription;
  bookedPromoList: Reservation[];
  validateBookingForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private reservationService: ReservationControllerService) { }

  ngOnInit() {
    this.getBookinglist();
    this.validateBookingForm = this.formBuilder.group({
      code: ['']
    });
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

  onSubmit() {
    
  }

}
