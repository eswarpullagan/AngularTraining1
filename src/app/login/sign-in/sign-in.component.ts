import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userName = "Guest"
  password:string=""
    signInHeading = "Sign In44444444444444444444444444444"
    handleMyEvent(obj) {
        this.userName = obj.usr;
        this.password=obj.pwd;
    }
  constructor() { }

  ngOnInit(): void {
  }
  
  
}


