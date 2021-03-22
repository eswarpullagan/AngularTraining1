import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mysign',
  templateUrl: './mysign.component.html',
  styleUrls: ['./mysign.component.css']
})
export class MysignComponent implements OnInit {
  @Input()
  title:string="";
  @Output()
  myEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  handleButtonClick(usr, pwd):void {
    console.log("Button Clicked... UserName: ", usr, " Password: ", pwd)
    this.myEvent.emit({usr, pwd})
}
  
   
}
