import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = "Guest";
  constructor() { }

  ngOnInit(): void {
  }
  showUserName():string {
    return this.userName
  }
}
