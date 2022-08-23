import { dish } from "./dish";


export class CartItem {

    id: number;
    name: string;
    imageUrl: string;
    unitPrice: number;

    quantity: number;

    constructor(dish: dish) {
        this.id = dish.dishid;
        this.name = dish.name;
        this.imageUrl = dish.imageUrl;
        this.unitPrice = dish.unitPrice;

        this.quantity = 1;
    }
}
