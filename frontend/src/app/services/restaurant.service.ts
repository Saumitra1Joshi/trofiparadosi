import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import {Restaurants} from '../pages/user/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private link="http://localhost:8080/restaurantcategory";

  constructor(private http:HttpClient) { }
  getDishList(): Observable<Restaurants[]> {
    return this.http.get<GetResponse>(this.link).pipe(
      map(response => response._embedded.restaurants)
    );
  }
}
interface GetResponse {
  _embedded: {
    restaurants: Restaurants[];
  }

}
