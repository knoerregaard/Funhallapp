import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { BookingListViewComponent } from './booking-list-view/booking-list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
  {
    path : 'Welcome',
    component : WelcomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'Bookings',
    component : BookingListViewComponent
  },
  {
    path : 'Details',
    component : DetailViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
