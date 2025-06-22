import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airport',
  imports: [FormsModule,CommonModule],
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})
export class AirportComponent implements OnInit{

  airportList:any[]=[];

  constructor(private apiService:ApiService,private urlService:UrlService,private router:Router){}

ngOnInit(): void {
this.GetAllAirport();
}

GetAllAirport(){
this.apiService.get(this.urlService.GetAllAirport).then((res:any)=>{
 console.log('res',res);
 this.airportList=res;
},error=>{

});
}
  addNew(){
this.router.navigateByUrl("new-airport");
  }
  bulkUpdateAirport(){}
}
