import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';
import { RouteModule } from './route.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent, 
    HeaderComponent,      
    HomeComponent, 
    NotFoundComponent, 
    ListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouteModule,
    HttpClientModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Constructor")
}

}
