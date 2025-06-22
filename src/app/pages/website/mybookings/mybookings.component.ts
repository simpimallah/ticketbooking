import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlService } from '../../../core/service/url.service';

@Component({
  selector: 'app-mybookings',
  imports: [CommonModule,FormsModule],
  templateUrl: './mybookings.component.html',
  styleUrl: './mybookings.component.css'
})
export class MybookingsComponent implements OnInit{
  flightId: number = 5;  // Example flightId, it can be dynamically set based on the flight
  bookings: any[] = [];
  passengers: any[] = [];
  errorMessage: string = '';
  travelers:any[]=[];

  constructor(private urlService:UrlService){}

  ngOnInit(): void {
   this.loadBookingDetails();
  }
  loadBookingDetails(){
    this.urlService.getBookingByFlightId(this.flightId).subscribe((res:any)=>{
      if(res.result){
       this.bookings=res.data;
       this.travelers=res.data[0].travelers;
      }
    })
  }
}
