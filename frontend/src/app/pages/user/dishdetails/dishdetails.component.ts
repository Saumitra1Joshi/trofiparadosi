import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DishService } from 'src/app/services/dish.service';
import { CartItem } from '../cartitem';
import { dish } from '../dish';

@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.css']
})
export class DishdetailsComponent implements OnInit {

  dish:dish;
  constructor(private dishService:DishService,
    private route:ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.handledishdetails();
  }
  handledishdetails() {
    // const dishid:number=+this.route.snapshot.paramMap.get('id')!;
    //console.log(this.route.snapshot.paramMap.get('id'));
    const dishid: number = +this.route.snapshot.paramMap.get('id');
    //console.log(dishid);
    this.dishService.getDish(dishid).subscribe(
      data=>{
        this.dish=data;
      }
    )
  }
  addToCart()
  {
    const theCartItem = new CartItem(this.dish);
    this.cartService.addtoCart(theCartItem);
  }

}
