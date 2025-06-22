import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-vendors',
  imports: [CommonModule],
  templateUrl: './all-vendors.component.html',
  styleUrl: './all-vendors.component.css'
})
export class AllVendorsComponent implements OnInit{

  vendorList:any[]=[];
  constructor(private router:Router,private apiService:ApiService,private urlService:UrlService){}

  ngOnInit(): void {
  this.GetAllVendors();
  }

  GetAllVendors(){
this.apiService.get(this.urlService.GetAllVendors).then((res:any)=>{
  this.vendorList=res
},error=>{
  console.error('Failed!', error);
})
  }
  addNewVendor(){
    this.router.navigateByUrl("new-vendor");
  }

}
