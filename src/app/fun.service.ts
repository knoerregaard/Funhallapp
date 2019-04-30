import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FunService {
url = "http://localhost:3000";

  constructor(private httpClient : HttpClient) { }
  public getBookings(){
    return this.httpClient.get(this.url + '/Bookings');
  }
//public newBooking(){
//  return this.httpClient.post()

//}
}
