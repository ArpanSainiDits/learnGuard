import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

    register(data:any){
    
    let url = "http://127.0.0.1:5000/api/account/register/"
    return this.http.post(url, data)
    }

    login(data:any){
      let url = "http://127.0.0.1:5000/api/account/login/"
      return this.http.post(url, data)
    }
    
}
