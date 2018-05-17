import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './user-service.service';

@Component({
  selector: 'app-user',
  providers:[UserServiceService],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users;
user;

  constructor(private service:UserServiceService) { }
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(data => {
      this.users = data;
      
    })
  }

  delete(id){
    console.log(id);
    if(confirm("Are you Sure ?")){
      this.service.delete(id).subscribe(() => {
        this.service.getAll().subscribe(data => {
          this.users = data;
      });
    });

  }
}

edit(_id, userId, username, password, role,address, city, district, phone){

      this.user = {
        _id: _id,
        userId: userId, 
        username: username,
        password: password,
        role:role,
        info: {
          city:city,
          address:address,
          district: district,
          phone: phone
        }
      }
    
    

    this.service.update(this.user).subscribe(()=> {});
    console.log(this.user);

}


}
