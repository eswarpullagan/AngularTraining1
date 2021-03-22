import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';
import { CartService } from '../shared/services/cart.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:Product[]=[];
  constructor(private ps:ProductService,private csvc:CartService,private ar:ActivatedRoute) {

   }

  ngOnInit(): void {
    //this.products=this.ps.getProducts();
    //this.ps.getProducts().subscribe(data => this.products=data, err => console.log("Error ",err));
    this.ar.params.subscribe(
      (params) => {
        let paramId = params.ctgid;
        this.ps.getProducts().subscribe(
          (data) => {
            if(paramId == undefined) {
              this.products = data;
            } else {
              this.products = data.filter(e => e.ctgid == paramId)
            }
          }
        )
      }
    )
  }
  addToCart(selectedproduct:Product) {
    let newitem = new CartItem(selectedproduct.id, selectedproduct.name, selectedproduct.price, 1)
    this.csvc.addCartItem(newitem)
  }
}
