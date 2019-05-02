import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { BookingListViewComponent } from './booking-list-view/booking-list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path : 'welcome', component : WelcomeComponent },
  { path : 'about', component : AboutComponent },
  { path : 'bookings', component : BookingListViewComponent },
  { path : 'details/:id', component : DetailViewComponent },
  { path : 'dashboard', component : DashboardComponent },
  { path : '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
