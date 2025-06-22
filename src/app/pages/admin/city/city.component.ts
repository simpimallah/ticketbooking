import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city',
  imports: [FormsModule,CommonModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit{

  cityList:any[]=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getAllCity();

  }

  getAllCity(){
    const token = localStorage.getItem('token'); // or sessionStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get("https://localhost:7213/api/FlightBooking/GetAllCity",{ headers }).subscribe((res:any)=>{
      console.log('res',res)
    this.cityList=res.data;
    })
  }
  bulkUpdateCity(){
    // const token = localStorage.getItem('token'); // or sessionStorage
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.post("https://localhost:7213/api/FlightBooking/AddUpdateBulkCity", this.cityList).subscribe((res:any)=>{
  console.log(res,'res')
  if(res.result){
    alert("Bulk Successfully update!")
  }else{
    alert(res.message);
  }
    })
  }
addNew(){
  const obj={
     cityId: 0,
      name: ''
  }
  this.cityList.unshift(obj);
}
}
