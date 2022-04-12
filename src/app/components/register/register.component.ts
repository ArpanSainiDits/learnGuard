import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private auuthService : UserDataService) { }

  ngOnInit(): void {
  }

public username:any
public password:any
public password2:any

public role_name : any= "seller"

registerData(username: any, password: any, password2: any, role_name : any){
  


  const data : any ={
    role_name  : role_name,
    password : password,
    email : username,

  }
  console.log(data);

      this.username = username;
      if (password == password2){
        this.password = password
        this.password2 = password2
        // alert('registered successfully');
        console.log(this.username)
        console.log(this.password)
        console.log(this.role_name)
      }
      else{
        // alert('Password did not match');
      }

      this.auuthService.register(data).subscribe((res:any) => {
        
      })

}
}
