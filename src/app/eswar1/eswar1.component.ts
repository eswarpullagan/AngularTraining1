import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eswar1',
  templateUrl: './eswar1.component.html',
  styleUrls: ['./eswar1.component.css']
})
export class Eswar1Component implements OnInit {
  userName :string="Guest from Sign In";
  signInHeading:string="Sign INggggg Eswar1";
  constructor() { }

  ngOnInit(): void {
  }
  handleMyEvent() {
    //this.userName = obj.usr; 
}
}
