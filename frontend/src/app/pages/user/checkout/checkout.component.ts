import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { LoginService } from 'src/app/services/login.service';
import { Order } from '../order';
import { OrderItem } from '../orderitem';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  user=null;
  totalPrice: number = 0;
  totalQuantity: number = 0;
  checkoutFormGroup: FormGroup;
  constructor(private login:LoginService,
    private formBuilder: FormBuilder,
    private cartService:CartService,
    private checkoutService:CheckoutService,
    private route:Router) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        customerName: [this.user.firstName],
        phoneno: [this.user.phoneNo],
        email: [this.user.email],
        address:[this.user.address],
        customerid:[this.user.userId]
      })
    });
    this.ordersummary();
  }
  ordersummary()
  {
    this.cartService.totalPrice.subscribe(
      totalPrice => this.totalPrice = totalPrice
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe( 
      totalQuantity => this.totalQuantity = totalQuantity
    );
  }
  onSubmit() {
    // set up order
    let order = new Order();
    order.totalPrice = this.totalPrice;
    order.totalQuantity = this.totalQuantity;

    // get cart items
    const cartItems = this.cartService.cartItems;

    // create orderItems from cartItems
    let orderItems: OrderItem[] = [];
    for (let i=0; i < cartItems.length; i++) {
      orderItems[i] = new OrderItem(cartItems[i]);
    }
    // set up purchase
    let purchase = new Purchase();

    // populate purchase - customer
    purchase.customer = this.checkoutFormGroup.controls['customer'].value;
 console.log( purchase.customer)
    // populate purchase - order and orderItems
    purchase.order = order;
    purchase.orderItems = orderItems;

    // call REST API via the CheckoutService
    this.checkoutService.placeOrder(purchase).subscribe({
        next: response => {
          alert(`Your order has been received.\nOrder tracking number: ${response.orderTrackingNumber}`);
          this.route.navigate(["payment"]);
          // reset cart
          this.resetCart();

        },
        error: err => {
          alert(`There was an error: ${err.message}`);
        }
      }
    );
  }
  resetCart()
  {
     // reset cart data
     this.cartService.cartItems = [];
     this.cartService.totalPrice.next(0);
     this.cartService.totalQuantity.next(0);
     
     // reset the form
     this.checkoutFormGroup.reset();
 
     // navigate back to the products page
     this.route.navigateByUrl("/userdashboard");
  }
}