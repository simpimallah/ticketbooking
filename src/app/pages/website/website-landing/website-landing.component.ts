import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';
import { CommonModule } from '@angular/common';
import { routes } from '../../../app.routes';
@Component({
  selector: 'app-website-landing',
  imports: [RouterOutlet,Dialog, ButtonModule, InputTextModule,FormsModule ,CommonModule,RouterLink],
  templateUrl: './website-landing.component.html',
  styleUrl: './website-landing.component.css'
})
export class WebsiteLandingComponent implements OnInit{
  visibleLogin: boolean = false;
  visibleRegister:boolean=false;

loggedUserData:any;
  registerObj:any={
    "fullName": "",
    "mobileNo": "",
    "email": "",
    "city": "",
    "address": "",
    "password": "",
    "role": ""
  }
  loginObj:any={
    "email": "",
    "password": ""
  }
  constructor(private apiService:ApiService,private urlService:UrlService,private router:Router){
    const isLocal = sessionStorage.getItem('flightCustomer');
    if(isLocal !=null){
      this.loggedUserData=JSON.parse(isLocal);
    }
  }

  ngOnInit(): void {

  }
  showDialogLogin() {
    this.visibleLogin = true;
}

showDialogRegister(){
this.visibleRegister=true;
}

onSaveRegister(){
this.apiService.post(this.urlService.Register,this.registerObj).then((res:any)=>{
  console.log('res',res)
alert(res.message);
this.visibleRegister=false;
},error=>{

})
}

onSaveLogin(){
  this.apiService.post(this.urlService.Login,this.loginObj).then((res:any)=>{
    alert(res.message);
    this.loggedUserData=res.data;
    console.log('loggedUserData',this.loggedUserData)
    sessionStorage.setItem('flightCustomer',JSON.stringify(res.token));
    this.visibleLogin=false;
  },error=>{

  });
}

logOff(){
  sessionStorage.removeItem('flightCustomer');
  this.loggedUserData=undefined;
  this.router.navigateByUrl("search");

}
}
