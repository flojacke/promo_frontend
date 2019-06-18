import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientControllerService } from 'src/app/shared/api/api.';
import { Reservation } from 'src/app/shared/models/models';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.scss']
})
export class MybookingsComponent implements OnInit {

  bookingSubscription: Subscription;
  bookingList: Reservation[];

  constructor(private clientService: ClientControllerService) { }

  ngOnInit() {
    this.getBookinglist();
  }

  getBookinglist() {
    let userId = (+(sessionStorage.getItem('userConnecte')));
    this.bookingSubscription = this.clientService.getBookListUsingPOST(userId).subscribe(
      (data) => {
        console.log(data);
        this.bookingList = data;
      },
      (err) => { }
  );
  }

}
