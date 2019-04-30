import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private httpClient: HttpClient) { }

  public getBookings(){
    return this.httpClient.get('localhost:3000' + '/Bookings')
  }
}
