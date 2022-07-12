import { Component, OnInit } from '@angular/core';
import { OrderStore } from 'src/app/shared/services/order/order.store';
import { OrderService } from '../../services/order.service';
import { Order } from '../../types/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.view.html',
  styleUrls: ['./orders.view.scss']
})
export class OrdersView implements OnInit {

  ordersList: Order[] = [];
  filteredOrderList: Order[] = [];
  filterData: any = {};
  constructor(private service: OrderService, public store: OrderStore) { }

  ngOnInit(): void {
    this.service.getOrderData().subscribe({next: (response => {
      this.ordersList = response;
      this.store.getOrderData(response);
    })});
  }

  updateFilterData(data: any){
    this.filterData = data;
  }

}
