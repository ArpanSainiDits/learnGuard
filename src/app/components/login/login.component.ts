import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';
import { LoginServiceService } from './login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  
  
  constructor(public loginService :UserDataService) { }

  ngOnInit(): void {
  }

public result:any;

gatLogin(userName: any, password: any){
      // if (userName == "arpansaini1236@gmail.com" && password == "12345"){
      //     this.result ="true"
        
      // }
      // else{
      //   this.result ="false"
      //   alert(this.result)
      // }
      // this.userdata.=>
      var data: any = {
        email: userName,
        password: password
      };
    
      this.loginService.login(data).subscribe((res:any) => {
        console.log(res)
        if(res.status == 'successfully logged In'){
          console.log("You have successfully logged In")
        }
        return res.token 
        
      })
 
      
}

}

