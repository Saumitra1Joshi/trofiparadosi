import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { dish } from '../pages/user/dish';
import { restaurant } from '../pages/user/restaurant';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private link="http://localhost:8080/dishes";
  private categoryUrl = 'http://localhost:8080/restaurantcategory';
  constructor(private http:HttpClient) { }

  getDish(dishId: number): Observable<dish>
  {
    const dishUrl = `${this.link}/${dishId}`;

    return this.http.get<dish>(dishUrl);
  }


  getDishList(theCategoryId:number): Observable<dish[]> {

    const searchUrl=`${this.link}/search/findByCategoryId?id=${theCategoryId}`;
    return this.getDishes(searchUrl);
  }

  searchDishes(theKeyword:string){

    const searchUrl = `${this.link}/search/findByNameContaining?name=${theKeyword}`;
    return this.getDishes(searchUrl);
  }
  


  getDishes(searchUrl:string):Observable<dish[]>{
    return this.http.get<GetResponsedish>(searchUrl).pipe(
      map(response => response._embedded.dishes)
    );
  }

  getrestaurantlist(): Observable<restaurant[]> {

    return this.http.get<GetResponserestaurant >(this.categoryUrl).pipe(
      map(response => response._embedded.restaurants)
    );
  }

  searchRestaurant(therestype:string){
    const searchresurl=`${this.categoryUrl}/search/findByRestype?restype=${therestype}`;
    return this.getrestaurant(searchresurl);
  }

  getrestaurant(restype: string):Observable<restaurant[]>
  {
    return this.http.get<GetResponserestaurant >(restype).pipe(
      map(response => response._embedded.restaurants)
    );
  }

}

interface GetResponsedish {
  _embedded: {
    dishes: dish[];
  }
}
interface GetResponserestaurant {
  _embedded: {
   restaurants: restaurant[];
  }
}