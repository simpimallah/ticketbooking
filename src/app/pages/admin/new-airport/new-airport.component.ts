import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';

@Component({
  selector: 'app-new-airport',
  imports: [FormsModule,CommonModule],
  templateUrl: './new-airport.component.html',
  styleUrl: './new-airport.component.css'
})
export class NewAirportComponent implements OnInit{

airportObj:any=
  {
    "airportId": 0,
    "airportCode": "",
    "airportName": "",
    "cityId": 0,
    "cityName": ""
  }


constructor(private router:Router,private apiService:ApiService,private urlService:UrlService){}

ngOnInit(): void {

}


  OnListAirport(){
    this.router.navigateByUrl("airport");
  }
  OnSaveAirport(){
this.apiService.post(this.urlService.AddUpdateBulkAirport,this.airportObj).then((res:any)=>{
  console.log('Success!', res);
  alert('Airports added/updated successfully.');
},error=>{
  console.error('Failed!', error);
  alert('Failed to add/update airports.');
});

  }

  resetAirport(){}

}
