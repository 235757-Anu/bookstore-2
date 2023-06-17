import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http:HttpClient,private service:ServicesService,private router:Router){}
  name:string=''
  mail:string=''
  pass:string=''
  alert():void
  {
   
    const user={username:this.name,email:this.mail,password:this.pass}
    this.service.postUser(user).subscribe(
      response => { console.log('Data sent successfully');
      this.gotoLogin();
      },
       error => { 
         console.error('Error sending data', error); 
       });
    }
    gotoLogin(){
      this.router.navigate(['/login']);
    }
}