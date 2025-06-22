import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-flights',
  imports: [CommonModule],
  templateUrl: './all-flights.component.html',
  styleUrl: './all-flights.component.css'
})
export class AllFlightsComponent implements OnInit{

  flightList:any[]=[];
  constructor( private router:Router,private apiService:ApiService,private urlService:UrlService){}

  ngOnInit(): void {
    // this.loadFlights();
    this.GetAllFlights();
  }

  // loadFlights(){
  //  this.http.get("https://localhost:7213/api/FlightBooking/GetAllFlights").subscribe((res:any)=>{
  // this.flightList=res.data;
  //  })
  // }
  GetAllFlights(){
   this.apiService.get(this.urlService.GetAllFlights).then((res:any)=>{
   console.log(res,'res')
   this.flightList=res.data;
   },error=>{})
  }

  bulkUpdateAllFlight(){}
  addNew(){
this.router.navigateByUrl("new-flight");
  }


}
