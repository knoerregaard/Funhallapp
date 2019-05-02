import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const bookings = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {bookings}
  }

  genId(bookings: Booking[]): number {
    return bookings.length > 0 ? Math.max(...bookings.map(booking => booking.id)) + 1 : 11;
  }
}
