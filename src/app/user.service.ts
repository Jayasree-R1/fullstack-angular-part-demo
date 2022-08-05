import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:8081/";
  constructor(private httpClinet: HttpClient) { }




  getUserList(){
    return this.httpClinet.get(this.baseUrl+"getDetailsList");
  }

}
