import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cardstatus',
  templateUrl: './cardstatus.component.html',
  styleUrls: ['./cardstatus.component.css']
})
export class CardstatusComponent implements OnInit {
  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.updateCartStatus()
  }
  updateCartStatus() {
    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}
