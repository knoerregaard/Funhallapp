import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list-view',
  templateUrl: './booking-list-view.component.html',
  styleUrls: ['./booking-list-view.component.css']
})
export class BookingListViewComponent implements OnInit {

  private bookings : Array<object> = [{
    navn: "Peter Nielsen",
    dato: "10. april"
  }]

  constructor() { }


  ngOnInit() {
  }

}
