import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../cartitem';

@Component({
  selector: 'app-carddetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.css']
})
export class CartdetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.listcartdetails();
  }
  listcartdetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe( 
      data => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();
    
  }
  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addtoCart(theCartItem);
  }
  
  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }

}
