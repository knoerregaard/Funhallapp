import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatListModule, MatList} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

//Materialize modules
import {MatToolbarModule} from '@angular/material/toolbar';
import { BookingListViewComponent } from './booking-list-view/booking-list-view.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingsService } from './bookings.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { MessagesComponent } from './messages/messages.component';
import { AddMemberComponent } from './add-member/add-member.component';


@NgModule({
  declarations: [
    DetailViewComponent,
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    BookingListViewComponent,
    DashboardComponent,
    BookingSearchComponent,
    MessagesComponent,
    AddMemberComponent,

  ],
  imports: [
    FormsModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [BookingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
