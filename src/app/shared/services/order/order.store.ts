import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Menu } from "src/app/features/menu/types/menu";
import { Order } from "src/app/features/order/types/order";
import { Store } from "../store";
import { OrderState } from "./order.store.state";

@Injectable({providedIn: 'root'})
export class OrderStore extends Store<OrderState>{

  constructor(private router: Router){
    super(new OrderState())
  }

  getOrderData(orders: Order[]):void{
    this.setState({
      ...this.state,
      orders: [
        ...this.state.orders, ...orders
      ]
    })
  }

  updateOrder(items: Order[]):void{
    this.setState({
      ...this.state,
      orders: [
        ...this.state.orders, ...items
      ]
    })
  }
}
