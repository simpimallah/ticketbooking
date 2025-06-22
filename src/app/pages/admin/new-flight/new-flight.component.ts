import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';

@Component({
  selector: 'app-new-flight',
  imports: [FormsModule,CommonModule],
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css'
})
export class NewFlightComponent implements OnInit{

airportList:any[]=[];
flightObj:any={
  "flightId":0,
  "flightNumber":"",
  "departureAirportId":0,
  "departureTime":"",
  "arrivalAirportId":0,
  "arrivalTime":"",
  "price":0,
  "totalSeats":0,
  "flightVendorId":0,
  "travelDate":""
};

constructor(private router:Router,private apiService:ApiService,private urlService:UrlService){
  const localData=localStorage.getItem("");
  if(localData != null){
    this.flightObj.flightVendorId=JSON.parse(localData).vendorId;
  }
}

ngOnInit(): void {
  this.loadAirport();
}
loadAirport(){
this.apiService.get(this.urlService.GetAllAirport).then((res:any)=>{
 this.airportList=res;
 console.log('airportList',this.airportList);
},error=>{
  console.log('Failed',error);
})
}
OnSaveFlight(){
    const obj=[];
    obj.push(this.flightObj);
    this.apiService.post(this.urlService.AddUpdateBulkFlights,obj).then((res:any)=>{
       if(res.result){
        alert('Flight Created Success');
       }else{
        alert(res.message);
       }
    })
  }
  resetFlight(){}
  OnListFlight(){
this.router.navigateByUrl("all-flight");
  }
}
