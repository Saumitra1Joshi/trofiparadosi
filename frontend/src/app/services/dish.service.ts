import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { dish } from '../pages/user/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private link="http://localhost:8080/dishes";

  constructor(private http:HttpClient) { }
  getDishList(): Observable<dish[]> {
    return this.http.get<GetResponse>(this.link).pipe(
      map(response => response._embedded.dishes)
    );
  }
}
interface GetResponse {
  _embedded: {
    dishes: dish[];
  }
}