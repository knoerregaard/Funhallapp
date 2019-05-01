import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  constructor(private httpClient: HttpClient) { }
  getBaseUrl(){
    return 'http://localhost:3000';
  }
  getBookings() : Observable<string> {
    const headers = new HttpHeaders({'Content-Type': 'text/plain'});
    return this.httpClient.get('/Bookings', {responseType: 'text', headers});
  }
}
