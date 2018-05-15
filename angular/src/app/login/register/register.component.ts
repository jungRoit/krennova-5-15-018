import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../login-service.service';
import{Md5} from 'ts-md5/dist/md5';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  providers:[LoginServiceService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user;
users = [];

  constructor(private service:LoginServiceService, private router:Router) { }

  ngOnInit() {
  }

  insert(ID,username,password,role) {
    this.user ={
      userId: parseInt(ID),
      username: username,
      password: Md5.hashStr(password),
      role: role
    }
    this.service.register(this.user).subscribe(res =>{
      this.users.push(res);
      console.log(JSON.stringify(res));
      this.router.navigate(['/']);
    })
  }

}
