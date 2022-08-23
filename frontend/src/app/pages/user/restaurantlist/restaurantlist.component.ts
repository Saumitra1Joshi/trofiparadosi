import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';
import { restaurant } from '../restaurant';



@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {

  restaurant:restaurant[]=[];
  
  constructor(private dishService:DishService) { }

  ngOnInit(): void {
    this.Restaurantlist();
  }
  Restaurantlist() {
    this.dishService.getrestaurantlist().subscribe(
      data => {
        // console.log('Restaurant List=' + JSON.stringify(data));
        this.restaurant = data;
      }
    );
  }
  resfilter(therestype:string)
  {
    if(therestype=='Both')
    {
      this.Restaurantlist();
    }
    this.dishService.searchRestaurant(therestype).subscribe(
      data => {
        // console.log('Restaurant List=' + JSON.stringify(data));
        this.restaurant = data;
      }
    );
  }
}
