import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrderStore } from 'src/app/shared/services/order/order.store';

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.component.html',
  styleUrls: ['./order-filter.component.scss']
})
export class OrderFilterComponent implements OnInit {

  filters: any = {};
  @Output() filterData = new EventEmitter<any>();

  constructor(public store: OrderStore) { }

  ngOnInit(): void {
  }

  filterUpdate(property: string, value:string){
    this.filters[property] = value;
    this.store.filterCriteria(this.filters);
  }

  clearFilter(property: string){
    this.filters[property] = '';
    this.store.filterCriteria(this.filters);
  }

}
