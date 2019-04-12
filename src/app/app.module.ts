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


@NgModule({
  declarations: [
    DetailViewComponent,
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    BookingListViewComponent,
    DetailViewComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
