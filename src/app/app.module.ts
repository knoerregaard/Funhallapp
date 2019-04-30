import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

//Materialize modules
import {MatToolbarModule} from '@angular/material/toolbar';
import { BookingListViewComponent } from './booking-list-view/booking-list-view.component';
import { FunService } from './fun.service';
import { HttpClientModule } from '@angular/common/http';
import { BookingsService } from './bookings.service';


@NgModule({
  declarations: [
    DetailViewComponent,
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    BookingListViewComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FunService,  BookingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
