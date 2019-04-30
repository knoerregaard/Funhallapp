import { Component, OnInit } from '@angular/core';
import { FunService } from '../fun.service';

@Component({
  selector: 'app-booking-list-view',
  templateUrl: './booking-list-view.component.html',
  styleUrls: ['./booking-list-view.component.css']
})
export class BookingListViewComponent implements OnInit {
  private hej : string;
  private bookings : Array<object> = [{
    navn: "Peter Nielsen",
    dato: "10. april"
  }]

  constructor(private funService : FunService) {
    funService.getBookings().subscribe(
      (suc)=>{
        this.hej = suc['hej']
      },(error: any)=>{
        console.log(error);
      }
    )
      console.log('efter getBookings');
      
   }


  ngOnInit() {
  }

}
