import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookflightComponent } from './pages/website/bookflight/bookflight.component';
import { MybookingsComponent } from './pages/website/mybookings/mybookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { CityComponent } from './pages/admin/city/city.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WebsiteLandingComponent } from './pages/website/website-landing/website-landing.component';
import { FlightDetailsComponent } from './pages/admin/flight-details/flight-details.component';
import { NewAirportComponent } from './pages/admin/new-airport/new-airport.component';
import { AllVendorsComponent } from './pages/admin/all-vendors/all-vendors.component';
import { NewVendorComponent } from './pages/admin/new-vendor/new-vendor.component';

export const routes: Routes = [
    {path:'', redirectTo:'search', pathMatch:'full'},
    {path:'',component:WebsiteLandingComponent,children:[
      {path:'search', component:SearchComponent,title:'Search Flight'},
      {path:'book-flight', component:BookflightComponent,title:'Book New Ticket'},
      {path:'bookings',component:MybookingsComponent,title:'My-Bookings'},
    ]},

    {path:'login',component:LoginComponent},
    {path:'', component:LayoutComponent, children:[
      {path:'dashboard', component:DashboardComponent},
      {path:'airport',component:AirportComponent},
      {path:'new-airport',component:NewAirportComponent},
      {path:'city',component:CityComponent},
      {path:'all-bookings',component:BookingsComponent},
      {path:'new-flight',component:NewFlightComponent},
      {path:'all-flight',component:AllFlightsComponent},
      {path:'flightDetails',component:FlightDetailsComponent},
      {path:'all-vendors',component:AllVendorsComponent},
      {path:'new-vendor' ,component:NewVendorComponent}

    ]}
];
