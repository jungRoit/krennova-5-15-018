import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import{Md5} from 'ts-md5/dist/md5';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  providers: [UserServiceService],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user;
  // info;
  users = [];

  constructor(private service:UserServiceService, private router:Router) { }

  ngOnInit() {
  }

  insert(ID,username,password,role) {
    // this.info = {
    //   address:address,
    //   city:city,
    //   district:district,
    //   phone:phone
    // }

    this.user ={
      userId: parseInt(ID),
      username: username,
      password: Md5.hashStr(password),
      role: role,
      
    }
    this.service.insert(this.user).subscribe(res =>{
      this.users.push(res);
      console.log(JSON.stringify(res));
      this.router.navigate(['/']);
    })
  }


}
