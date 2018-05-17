import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) {
    var id = localStorage.getItem("id");
    if(id == undefined || id == null){
      this.router.navigate(['/']);
    }

    var role = localStorage.getItem("role");
    if(role === "admin"){
      this.router.navigate(['/users']);
    }else{
      this.router.navigate(['/user-profile']);
    }
   }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
