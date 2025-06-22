import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  post(CustomerList: string, data: { LOGIN_ID: any; }) {
    throw new Error('Method not implemented.');
  }

  ApiUrl:string="https://localhost:7213/api/FlightBooking/";
  constructor(private http:HttpClient) { }

  public Login = this.ApiUrl + 'login';
  public Register = this.ApiUrl + 'register';
  public GetAllAirport = this.ApiUrl + 'GetAllAirport';
  public GetAllFlights = this.ApiUrl + 'GetAllFlights';
  public GetAllFlightBooking = this.ApiUrl + 'GetAllFlightBooking';
  public GetUpcomingFlights = this.ApiUrl + 'GetUpcomingFlights';
  public GetStats = this.ApiUrl + 'GetStats';
  public BookTicket = this.ApiUrl + 'BookTicket';
  public GetBookingByFlightId = this.ApiUrl + 'GetBookingByFlightId';
  public GetPassengerListByFlightId = this.ApiUrl + 'GetPassengerListByFlightId';
  public AddUpdateBulkAirport = this.ApiUrl + 'AddUpdateBulkAirport';
  public AddUpdateBulkFlights = this.ApiUrl + 'AddUpdateBulkFlights';
  public AddUpdateBulkVendor = this.ApiUrl + 'AddUpdateBulkVendor';
  public GetAllVendors = this.ApiUrl + 'GetAllVendors';

  getBookingByFlightId(flightId: number): Observable<any> {
    return this.http.get(`${this.ApiUrl}GetBookingByFlightId?flightId=${flightId}`);
  }

  getPassengerListByFlightId(flightId: number): Observable<any> {
    return this.http.get(`${this.ApiUrl}GetPassengerListByFlightId?flightId=${flightId}`);
  }



}
