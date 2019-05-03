import { Component, OnInit } from '@angular/core';
import { BookingsService} from '../bookings.service';
import { Booking } from '../booking';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-booking-list-view',
  templateUrl: './booking-list-view.component.html',
  styleUrls: ['./booking-list-view.component.css']
})

export class BookingListViewComponent implements OnInit {
    bookings: Booking[];

  constructor(private bookingsService: BookingsService) { }


  ngOnInit() {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingsService.getBookings()
    .subscribe((bookings) => {
      this.bookings = bookings;
      console.log(this.bookings)
    })
  }

  add(name: string): void {
    name = name.trim();
    if(!name){
      return;
    }
    this.bookingsService.addBooking({ name } as Booking)
    .subscribe(booking => {
      this.bookings.push(booking);
    });
  }

  delete(booking: Booking): void {
    this.bookings = this.bookings.filter(h => h !== booking);
    this.bookingsService.deleteBooking(booking).subscribe();
  }
}
