import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  providers: [LoginServiceService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data;
  constructor(private service: LoginServiceService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    var pass = Md5.hashStr(password);
    this.service.login(username, pass).subscribe((data) => {
      localStorage.setItem("token", data);
      this.login2(username, password);

    });

  }

  login2(username, password) {

    var pass = Md5.hashStr(password);
    this.service.login2(username, pass).subscribe((data) => {
      console.log(data)
      this.data = data;

      if (this.data.length != 0) {
        localStorage.setItem("role", this.data[0].role);
        localStorage.setItem("id", this.data[0]._id);
        localStorage.setItem("username",username);
        localStorage.setItem("userId",this.data[0].userId);
        localStorage.setItem("password",password);
        // localStorage.setItem("token",)
        this.router.navigate(['/users']);
      
      } else {
        alert("Wrong username or password");
      }
    });
  }

}