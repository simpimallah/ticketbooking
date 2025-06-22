import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';
import { UrlService } from '../../../core/service/url.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  EMAIL_ID:any;
  PASSWORD:any;

constructor(private apiService:ApiService, private urlService:UrlService,private router:Router){}

ngOnInit(): void {

}
onLogin(){
  let data={
    Email:this.EMAIL_ID,
    Password:this.PASSWORD
  }
  this.apiService.post(this.urlService.Login,data).then((res:any)=>{
    console.log("res",res)
    const Token=res.token;
    this.router.navigateByUrl("dashboard");

    sessionStorage.setItem('token',Token);
  }, error => {
  });
}
}
