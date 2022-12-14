import { CartItem } from "./cartitem";

export class OrderItem {
    imageUrl: string;
    unitPrice: number;
    quantity: number;
    productId: number;
    productname:string;
    constructor(cartItem: CartItem) {
        this.imageUrl = cartItem.imageUrl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
        this.productId = cartItem.id;
        this.productname=cartItem.name;
    }
}
