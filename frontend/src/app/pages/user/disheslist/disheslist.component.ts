import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DishService } from 'src/app/services/dish.service';
import { CartItem } from '../carditem';
import { dish } from '../dish';

@Component({
  selector: 'app-disheslist',
  templateUrl: './disheslist.component.html',
  styleUrls: ['./disheslist.component.css']
})
export class DisheslistComponent implements OnInit {
  dishes: dish[];
  currentCategoryId: number = 1;
  searchMode: boolean;
  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listdishes();
    });
  }

  listdishes() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchDishes();
    }
    else {
      this.handleListDishes();
    }
  }
  handleSearchDishes() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // now search for the products using keyword
    this.dishService.searchDishes(theKeyword).subscribe(
      data => {
        this.dishes = data;
      }
    )
  }
  handleListDishes() {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    }
    else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
    }
    this.dishService.getDishList(this.currentCategoryId).subscribe(
      data => {
        this.dishes = data;
      }
    )
  }
  addToCart(thedish: dish) {

    console.log(`Adding to cart: ${thedish.name}, ${thedish.unitPrice}`);

    // TODO ... do the real work
    console.log("before");
    const theCartItem = new CartItem(thedish);
    console.log(theCartItem);
    this.cartService.addtoCart(theCartItem);
  }

}
