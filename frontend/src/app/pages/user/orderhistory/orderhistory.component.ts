import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { OrderhistoryService } from 'src/app/services/orderhistory.service';
import { OrderHistory } from '../orderhistory';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  user=null;
  orderHistoryList: OrderHistory[] = [];
  constructor(private orderHistoryService:OrderhistoryService,
              private login:LoginService ) { this.user = this.login.getUser();}

  ngOnInit(): void {
    this.handleOrderHistory();
  }
  handleOrderHistory() {
     const customerid='' +this.user.userId;

    // read the user's email address from browser storage
    console.log(customerid);
    console.log(typeof(customerid));
    // retrieve data from the service
    this.orderHistoryService.getOrderHistory(customerid).subscribe(
      data => {
        this.orderHistoryList = data._embedded.orders;
        console.log(this.orderHistoryList);
      }
    );
  }
}

