import { Component, OnInit } from '@angular/core';
import { FunService } from '../fun.service';
import { BookingsService} from '../bookings.service';

@Component({
  selector: 'app-booking-list-view',
  templateUrl: './booking-list-view.component.html',
  styleUrls: ['./booking-list-view.component.css']
})

export class BookingListViewComponent implements OnInit {
  public name : string;

  constructor(private funService : FunService, private bookingsService: BookingsService) {
    funService.getBookings().subscribe(
      (suc)=>{
        this.name = suc['name']
      },(error: any)=>{
        console.log(error);
      }
    )
      console.log('efter getBookings');

      bookingsService.getBookings().subscribe(
        (suc)=>
        {
          this.name = suc['name']
        },(error:any)=>{
          console.log(error);
        }
      )
   }


  ngOnInit() {
  }

}
