import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

var token = localStorage.getItem('token');
const headers = new Headers();
headers.append('auth', 'Bearer' + token);
const options = new RequestOptions({headers: headers});

@Injectable()
export class UserServiceService {

  constructor(private http:Http) { }

  getAll(){
    var headers = new Headers({"content-type":"application/json"});
    return this.http.get("http://localhost:21000/users",options).map(res => res.json());
  }

  getById(id){
    var headers = new Headers({"content-type":"application/json"});
    return this.http.get("http://localhost:21000/users/"+id,options).map(res => res.json());
  }

  insert(user){
    var headers = new Headers({"content-type":"application/json"});
    return this.http.post("http://localhost:21000/users/",user,options).map(res => res.json());
  }

  update(id,user){
    var headers = new Headers({"content-type":"application/json"});
    return this.http.put("http://localhost:21000/users/"+id,JSON.stringify(user),options).map(res => res.json());
  }

  delete(id){
    var headers = new Headers({"content-type":"application/json"});
    return this.http.delete("http://localhost:21000/users/"+id,options).map(res => res.json());
  }

}
