import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlService } from '../../../core/service/url.service';

@Component({
  selector: 'app-flight-details',
  imports: [CommonModule,FormsModule],
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.css'
})
export class FlightDetailsComponent implements OnInit{
  flightId: number = 5;  // Example flightId, it can be dynamically set based on the flight
  bookings: any[] = [];
  passengers: any[] = [];
  errorMessage: string = '';
  travelers:any[]=[];
  constructor(private urlService:UrlService){}

  ngOnInit(): void {
    this.loadBookingDetails();
    this.loadPassengerList();
  }
  loadBookingDetails(){
    this.urlService.getBookingByFlightId(this.flightId).subscribe((res:any)=>{
      if(res.result){
        this.bookings=res.data;
        this.travelers=res.data[0].travelers;
      }else {
        this.errorMessage = 'No bookings found for this flight.';
      }
    },
    (error) => {
      this.errorMessage = 'Error fetching booking details.';
    })
  }
  loadPassengerList() {
    this.urlService.getPassengerListByFlightId(this.flightId).subscribe(
      (response) => {
        if (response.result) {
          this.passengers = response.data;
        } else {
          this.errorMessage = 'No passengers found for this flight.';
        }
      },
      (error) => {
        this.errorMessage = 'Error fetching passenger list.';
      }
    );
  }
}
