import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
cartItems:CartItem[]=[];
  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cartItems=this.cs.getCartItems();
  }
  totalAmount() {
    let tot = 0;
    for(let e of this.cartItems) {
      tot += (e.price * e.quantity)
    }
    return tot;
  }
  delete(idx:number){
    this.cs.removeCartItem(idx);
  }
}
