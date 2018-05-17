import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-info',
  providers: [UserServiceService],
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent implements OnInit {
  id;
  role;
  username;
  password;
  userId;
  user;

  constructor(private service: UserServiceService, private router: Router) { }

  ngOnInit() {
  }

  insert(address, city, district, phone) {
    console.log(address,city,district,phone);
    var userID = localStorage.getItem('id');
    this.service.getById(userID).subscribe((userData) => {
        var update = {
          _id: userData[0]._id,
          userId: userData[0].userId,
          username: userData[0].username,
          password: userData[0].password,
          role: userData[0].role,
          info:{
            address: address,
            city: city,
            district: district,
            phone: phone
          }
        }
        console.log(update);
        this.service.update(update).subscribe(() => {});

    });
  }
}


