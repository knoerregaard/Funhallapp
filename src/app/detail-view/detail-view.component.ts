import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Booking }         from '../booking';
import { BookingsService }  from '../bookings.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  @Input() booking: Booking;

  constructor(
    private route: ActivatedRoute,
    private bookingsService: BookingsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBooking();
  }

  getBooking(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookingsService.getBooking(id)
    .subscribe(booking => this.booking = booking);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.bookingsService.updateBooking(this.booking)
      .subscribe(() => this.goBack());
  }
}
