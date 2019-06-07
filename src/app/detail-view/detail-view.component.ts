import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Booking }         from '../booking';
import { BookingsService }  from '../bookings.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  booking: Booking;
  bookings: Booking[];

  constructor(
    private route: ActivatedRoute,
    private bookingsService: BookingsService,
    private location: Location,
    private router : Router

  ) {}

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingsService.getBookings()
    .subscribe(bookings => this.bookings = bookings.slice(1, 5));
  }
  // add(name: string): void {
  //   name = name.trim();
  //   if(!name){
  //     return;
  //   }
  //   this.bookingsService.addBooking({ name } as Booking)
  //   .subscribe(members => {
  //     th
  //   })
  // }

  // getBooking(): void {
  //   const id =+ this.route.snapshot.paramMap.get('id');
  //   this.bookingsService.getBooking(1)
  //   .subscribe((booking => {
  //     this.booking = booking;
  //     console.log(this.booking)
  //   }))
  // }

  goBack(): void {
    this.location.back();
  }
}
