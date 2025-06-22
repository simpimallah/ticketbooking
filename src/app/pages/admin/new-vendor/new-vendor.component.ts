import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';

@Component({
  selector: 'app-new-vendor',
  imports: [FormsModule,CommonModule],
  templateUrl: './new-vendor.component.html',
  styleUrl: './new-vendor.component.css'
})
export class NewVendorComponent implements OnInit{

  vendorsObj:any={
    vendorId: 0,
    vendorName: '',
    emailId: '',
    customerCareNo: '',
    headoffice: '',
    vendorLogoUrl: ''
  }
  constructor(private router:Router, private apiService:ApiService,private urlService:UrlService){}

  ngOnInit(): void {

  }

  OnListVendor(){
    this.router.navigateByUrl("all-vendors");
  }
  OnSaveVendor(){
   this.apiService.post(this.urlService.AddUpdateBulkVendor,this.vendorsObj).then((res:any)=>{
    console.log('Success!', res);
    alert('Vendors added/updated successfully.');
   },error=>{
    console.error('Failed!', error);
    alert('Failed to add/update vendors.');
   })
  }
  resetVendor(){}

}
