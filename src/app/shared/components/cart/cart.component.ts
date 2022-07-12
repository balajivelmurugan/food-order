import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Menu } from 'src/app/features/menu/types/menu';
import { OrderService } from 'src/app/features/order/services/order.service';
import { Order } from 'src/app/features/order/types/order';
import { CartService } from '../../services/cart.service';
import { MenuStore } from '../../services/menu/menu.store';
import { OrderStore } from '../../services/order/order.store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cartDataList !: Menu[];

  constructor(public storeM: MenuStore, public storeO: OrderStore,private snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
  }

  removeCartItem(item: Menu){
    if(item.quantity === 0)
    this.storeM.removeCartItem(item);
  }

  updateOrderDetails(){
    let orderItems: Order[] = [];
    this.cartDataList.map(item => {
      let orderItem: Order = {} as Order;
    orderItem.cuisine = item.cuisine;
    orderItem.item_name = item.name;
    orderItem.price = item.price;
    orderItem.type = item.type;
    orderItem.order_date = formatDate(new Date(), 'yyyy-MM-dd', 'en-US', '+0530');
    //this.datePipe.transform(new Date(), 'yyy-mm-dd').toString();
    orderItem.order_time = formatDate(new Date(), 'hh:mm', 'en-US', '+0530');

    orderItems.push(orderItem);
  })
    this.storeO.updateOrder(orderItems);
    this.storeM.clearCartItem();
    this.snackBar.open('Order is Placed !!!', 'SUCCESS', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5 * 1000
    });
    this.router.navigateByUrl('menu');
  }
}
