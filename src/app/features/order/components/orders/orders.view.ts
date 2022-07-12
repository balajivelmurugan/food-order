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
      this.filteredOrderList = this.ordersList;
      console.log(this.ordersList);
    })});
  }

  updateFilterData(data: any){
    this.filterData = data;
    if(!this.filterData.cuisine && !this.filterData.type){
      this.filteredOrderList = this.ordersList;
    }else{
      if((this.filterData.hasOwnProperty('cuisine') && this.filterData.cuisine !== '') && (this.filterData.hasOwnProperty('type') && this.filterData.type !== ''))
      this.filteredOrderList = this.ordersList.filter(item => item.cuisine === this.filterData.cuisine);this.filteredOrderList = this.ordersList.filter(item => item.type === this.filterData.type);
      if(this.filterData.hasOwnProperty('cuisine') && this.filterData.cuisine !== '')
      this.filteredOrderList = this.ordersList.filter(item => item.cuisine === this.filterData.cuisine);
      if(this.filterData.hasOwnProperty('type') && this.filterData.type !== '')
      this.filteredOrderList = this.filteredOrderList.filter(item => item.type === this.filterData.type);
    }
  }

}
