import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { Booking } from '../booking';
import { BookingsService } from '../bookings.service';


@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.css']
})
export class BookingSearchComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  private searchTerms = new Subject<string>();

  constructor(private bookingsService: BookingsService) { }


  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.bookings$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.bookingsService.searchBookings(term)),
    );
  }
}
