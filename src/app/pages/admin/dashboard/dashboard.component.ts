import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{


  stats = [
    {
      title: 'Total Bookings',
      value: 0,
      icon: 'bi bi-bookmark-check-fill',
      bgClass: 'bg-primary'
    },
    {
      title: 'Today Flights',
      value: 0,
      icon: 'bi bi-airplane-engines',
      bgClass: 'bg-success'
    },
    {
      title: 'Available Seats',
      value: 0,
      icon: 'fa fa-chair',
      bgClass: 'bg-warning'
    },
    {
      title: 'Delayed Flights',
      value: 0,
      icon: 'bi bi-clock-history',
      bgClass: 'bg-danger'
    }
  ];


  flights = [
    {
      number: 'AI-202',
      airline: 'Air India',
      from: 'Delhi',
      to: 'Mumbai',
      departure: new Date(),
      status: 'On Time'
    },
    {
      number: 'EK-512',
      airline: 'Emirates',
      from: 'Dubai',
      to: 'Delhi',
      departure: new Date(),
      status: 'Delayed'
    }
  ];

  seatsList:any[]=[];
  upcomingFlightsList:any[]=[];
  totalBookings:any;
  todayFlights:any;
  availableSeats:any;
  delayedFlights:any;
  allSeatsList:any[]=[];
  constructor(private apiService:ApiService,private urlService:UrlService){}
  ngOnInit(): void {
this.GetUpcomingFlights();
this.GetStats();
  }

  GetUpcomingFlights(){
this.apiService.get(this.urlService.GetUpcomingFlights).then((res:any)=>{
  console.log('res',res);
  this.upcomingFlightsList=res;

},error=>{

})
  }
  GetStats(){
    this.apiService.get(this.urlService.GetStats).then((res:any)=>{
    this.seatsList=res;
this.totalBookings=res.totalBookings
this.todayFlights=res.todayFlights
this.availableSeats=res.availableSeats;
this.delayedFlights=res.delayedFlights;
    },error=>{

    })
  }
}
