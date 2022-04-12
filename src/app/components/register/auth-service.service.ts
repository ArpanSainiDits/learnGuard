import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  register(data:any){
    
  let url = "http://127.0.0.1:5000/api/account/register/"
  return this.http.post(url, data)
  }
}
