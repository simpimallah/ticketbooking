import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  isSidebarOpen = false;

  loggedUserData:any;
  constructor(private router:Router){
    const localData = localStorage.getItem("");
    if(localData !=null){
      this.loggedUserData = JSON.parse(localData);
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logOff(){
    localStorage.removeItem('');
    this.router.navigateByUrl('login');
  }
}
