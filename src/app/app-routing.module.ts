import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { BookingListViewComponent } from './booking-list-view/booking-list-view.component';

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
    path : 'bookings',
    component : BookingListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
