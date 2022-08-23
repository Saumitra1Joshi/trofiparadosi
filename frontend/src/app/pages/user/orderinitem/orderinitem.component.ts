import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderhistoryService } from 'src/app/services/orderhistory.service';
import { OrderInItem } from '../orderinitem';

@Component({
  selector: 'app-orderinitem',
  templateUrl: './orderinitem.component.html',
  styleUrls: ['./orderinitem.component.css']
})
export class OrderinitemComponent implements OnInit {
  orderInItem:OrderInItem[]=[];
  constructor(private orderHistoryService:OrderhistoryService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.handleorderdetails();
  }
  handleorderdetails() {
    console.log('inside')
    const orderid = +this.route.snapshot.paramMap.get('id');
    console.log(orderid);
    this.orderHistoryService.getOrder(orderid).subscribe(
      data => {
        this.orderInItem = data._embedded.orderinitem;
        console.log(this.orderInItem);
      }
    );
  }

}
