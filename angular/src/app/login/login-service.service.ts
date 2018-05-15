import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

var token = localStorage.getItem('token');
const headers = new Headers();
headers.append('auth', 'Bearer' + token);
const options = new RequestOptions({headers: headers});

@Injectable()
export class LoginServiceService {

  constructor(private http:Http) { }

login(username,password){
  var headers = new Headers({'content-type':'application/json'});
  return this.http.get("http://localhost:21000/login/"+username+"/"+password,options).map(res => res.json());
}

login2(username,password){
  var headers = new Headers({'content-type':'application/json'});
  return this.http.get("http://localhost:21000/after/login/"+username+"/"+password,options).map(res => res.json());
}

register(user){
  var headers = new Headers({"content-type":"application/json"});
  return this.http.post("http://localhost:21000/users/",user,options).map(res => res.json());
}


}
