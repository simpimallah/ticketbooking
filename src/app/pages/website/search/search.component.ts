import { Component, OnInit } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [Dialog,InputTextModule,ButtonModule,FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  visibleBookTicket:boolean=false;
  isHideShowDialogBox:boolean=false;
   airports:any[]=[];
   fromAirport:number=0;
   toAirport:number=0;
   travelDate:string='';
   returnDate:string='';
   flightList:any[]=[];
   FULLNAME:any;
   CONTACT_NO:any;
   AADHAR_CARD:any;
   isHideShowFlightDetails:boolean=false;
   passengerObj:any={
      "travelerName": "",
      "contactNo": "",
      "aadharNo": "",
      "seatNo": '',


   };
   bookingObj:any={
    "flightId": 5,
    "customerId": 1,
    "bookingCode": this.generateBookingCode(),
    "bookingDate": new Date(),
    "totalAmount": 0,
    "flightBookingTravelers": [ ]
   }
   passengerList:any[]=[];
   arrivalAirportName:any;
   departureAirportName:any;
   arrivalAirportCode:any;
   departureAirportCode:any;
   departureTime:any;
   arrivalTime:any;
   loggedUserData:any;
   isHideShowBookTicket:boolean=false;
  constructor(private apiService:ApiService,private urlService:UrlService,private router:Router){
    const isLocal = sessionStorage.getItem('flightCustomer');
    console.log('isLocal',isLocal)
    if(isLocal !=null){
      this.bookingObj.customerId=JSON.parse(isLocal).userId;
      this.loggedUserData=JSON.parse(isLocal);
      console.log('loggedUserData',this.bookingObj)
    }
  }

  ngOnInit(): void {
this.loadAirports();
  }

  addPassenger(){
    const obj = JSON.stringify(this.passengerObj);
    const newObj=JSON.parse(obj);
    this.passengerList.push(newObj);
    console.log(this.passengerList,'passengerList')
    this.isHideShowBookTicket=true;
    this.clearData();
  }
  onBookTicket(){
    this.bookingObj.flightBookingTravelers=this.passengerList;
    this.apiService.post(this.urlService.BookTicket,this.bookingObj).then((res:any)=>{
      if(res.result){
        this.isHideShowDialogBox=false;
        this.visibleBookTicket=false;
        alert('Ticket Booked Success');
        this.router.navigateByUrl("bookings");
        this.clearData();


      }else{
        alert(res.message);
      }
    },error=>{

    })
  }
  loadAirports(){
this.apiService.get(this.urlService.GetAllAirport).then((res:any)=>{
  console.log('res.data',res)
  this.airports=res;
})
  }

  searchFlights(){
    this.apiService.searchFlight(this.fromAirport,this.toAirport,this.travelDate).subscribe((res:any)=>{
      console.log('res.data',res)
      this.isHideShowFlightDetails=true;
      this.flightList=res.data
      this.arrivalAirportName=res.data[0].arrivalAirportName;
      this.departureAirportName=res.data[0].departureAirportName;
      this.arrivalAirportCode=res.data[0].arrivalAirportCode;
      this.departureAirportCode=res.data[0].departureAirportCode;
      this.departureTime=res.data[0].departureTime;
      this.arrivalTime=res.data[0].arrivalTime


    })
  }
  showDialogBookTicket(flightId:number){
    this.bookingObj.flightId=flightId;
    this.isHideShowDialogBox=true;
    this.visibleBookTicket=true;
  }

  clearData(){
    this.passengerObj={
      "travelerName": "",
      "contactNo": "",
      "aadharNo": "",
      "seatNo": '',
   };
  }

  generateBookingCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

}
