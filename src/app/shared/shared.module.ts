import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MysignComponent } from './mysign/mysign.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { CategoryService } from './services/category.service';



@NgModule({
  declarations: [MysignComponent],
  imports: [
    CommonModule
  ],
  exports:[MysignComponent],
  providers:[ProductService,CartService,CategoryService]
})
export class SharedModule {
  constructor(){
    console.log("Shared Module Constructor")
}
 }
