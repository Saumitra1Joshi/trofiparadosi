import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';
import { dish } from '../dish';

@Component({
  selector: 'app-dishlist',
  templateUrl: './dishlist.component.html',
  styleUrls: ['./dishlist.component.css']
})
export class DishlistComponent implements OnInit {
  dishes:dish[]=[];
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.listdishes();
  }

  listdishes()
  {
    this.dishService.getDishList().subscribe(
      data=>{
        this.dishes=data;
      }
    )
  }

}