import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, private router:Router) { }


  post(url:string,data:any){
    if (!sessionStorage.getItem("token")) {
      sessionStorage.setItem("token","");
    }
    return new Promise((resolve,reject)=>{
      return this.http.post(url ,data,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(data=>{
        resolve(data);
      },error=>{
        reject(error);
      })
    })
  }

  get(url: any) {
    if (!sessionStorage.getItem("token")) {
      sessionStorage.setItem("token","");
    }
    return new Promise((resolve, reject) => {
      return this.http.get(url, { observe: 'response', headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") } }).subscribe(
        data => {

          if (data.body)
            resolve(data.body);
          else
            resolve(data);
        },
        error => {
          if (error && error.status == 401) {

          }
          reject(error)
        }
      )
    })
  }



  delete(url: any) {
    return new Promise((resolve, reject) => {
      return this.http.delete(url, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") } }).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error)
        }
      )
    })
  }

  put(url: any,data: any) {
    return new Promise((resolve, reject) => {
      return this.http.put(url, data, { headers: { "Authorization": "Bearer " + sessionStorage.getItem("token") } }).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error)
        }
      )
    })
  }
  searchFlight(departureAirportId:number,arrivalAirportId:number,travelDate:string){
   return this.http.get("https://localhost:7213/api/FlightBooking/SearchFlight?departureAirportId="+departureAirportId +"&arrivalAirportId="+arrivalAirportId+"&dateOfTravel="+travelDate+"");
      }



}
