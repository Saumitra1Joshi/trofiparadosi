import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderHistory } from '../pages/user/orderhistory';
import { OrderInItem } from '../pages/user/orderinitem';

@Injectable({
  providedIn: 'root'
})
export class OrderhistoryService {
  private url='http://localhost:8080/orders';
  private link='http://localhost:8080/orderinitem';
  constructor(private http:HttpClient) { }

  getOrderHistory(thecustomerid: string): Observable<GetResponseOrderHistory> {

    // need to build URL based on the customer email
    const orderHistoryUrl = `${this.url}/search/findByCustomerCustomeridOrderByDateCreatedDesc?customerid=${thecustomerid}`;

    return this.http.get<GetResponseOrderHistory>(orderHistoryUrl);
  }

  getOrder(orderId:number):Observable<GetResponseOrderInItem>
  {
    const orderUrl = `${this.link}/search/findByOrderId?id=${orderId}`;
    return this.http.get<GetResponseOrderInItem>(orderUrl);
  }
  
}
interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  }
}
interface GetResponseOrderInItem {
  _embedded: {
  orderinitem:OrderInItem[];
  }
}