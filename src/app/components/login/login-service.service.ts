import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(data:any){
    let url = "http://127.0.0.1:5000/api/account/login/"
    return this.http.post(url, data)
  }
}
