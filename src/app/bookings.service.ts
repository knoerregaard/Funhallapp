import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { MessageService } from './message-service.service';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Booking } from './booking';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class BookingsService {

  private bookingsUrl = "http://localhost:3000";
  constructor(private http: HttpClient, private messageService: MessageService) { }

  searchBookings(term: string): Observable<Booking[]>{
    if (!term.trim()){
      return of([]);
    }
  }

  getBooking(id: number): Observable<Booking>{
    return this.http.get<Booking>(this.bookingsUrl + '/details')
  }

  getBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>(this.bookingsUrl + '/bookings')
  }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.bookingsUrl, booking, httpOptions).pipe(
      tap((newBooking: Booking) => this.log(`added booking w/ ud =${newBooking.id}`)),
      catchError(this.handleError<Booking>('addBooking'))
    );
  }

  updateBooking(booking: Booking): Observable<any>{
    return this.http.put(this.bookingsUrl, booking, httpOptions).pipe(
      tap(_ => this.log(`updated booking id=${booking.id}`)),
      catchError(this.handleError<any>('updateBooking'))
    );
  }


  deleteBooking (booking: Booking | number): Observable<Booking> {
    const id = typeof booking === 'number' ? booking : booking.id;
    const url = `${this.bookingsUrl}/${id}`;

    return this.http.delete<Booking>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted booking id=${id}`)),
      catchError(this.handleError<Booking>('deleteBooking'))
    );
  }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a BookingService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BookingsService: ${message}`);
  }
}
