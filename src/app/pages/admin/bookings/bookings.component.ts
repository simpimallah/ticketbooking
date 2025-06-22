import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bookings',
  imports: [CommonModule,RouterLink],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{


  flightBookingList:any[]=[];
  constructor(private apiService:ApiService,private urlService:UrlService,private router:Router){}

  ngOnInit(): void {
    this.GetAllFlightBooking();
  }
  GetAllFlightBooking(){
   this.apiService.get(this.urlService.GetAllFlightBooking).then((res:any)=>{

    console.log(res,'res')
    this.flightBookingList=res.data;

   },error=>{

   })
  }

  viewDatails(){
    this.router.navigateByUrl("flightDetails");
  }
}
