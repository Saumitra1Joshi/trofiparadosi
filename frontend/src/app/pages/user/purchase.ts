import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./orderitem";

export class Purchase {
    customer: Customer;
    order: Order;
    orderItems: OrderItem[]; 
}
