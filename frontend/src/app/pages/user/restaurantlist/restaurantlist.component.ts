import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurants } from '../restaurants';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {
  
  restaurants: Restaurants[] = [];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.listdishes();
  }

  listdishes()
  {
    this.restaurantService.getDishList().subscribe(
      data=>{
        this.restaurants=data;
      }
    )
  }


}
