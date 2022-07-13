import { formatDate } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, LOCALE_ID, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../types/order';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { OrderStore } from 'src/app/shared/services/order/order.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, AfterViewInit, OnDestroy {

  //ordersList: Order[]= [];
  //@Input() filteredList: Order[] = [];
  @Input() filterData: any;
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  dataSource !: MatTableDataSource<Order>;
  @ViewChild(MatSort) sort !: MatSort;
  orderSubscription = new Subscription();

  ngAfterViewInit() {
  }

  constructor(private _liveAnnouncer: LiveAnnouncer, public store: OrderStore) { }

  ngOnInit(): void {
    this.orderSubscription = this.store.state$.subscribe(response => {
      this.dataSource = new MatTableDataSource<Order>(response.orders );
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this.store.state$.subscribe(response => {
      if(response.filterOrder.cuisine.length)this.dataSource.filter = response.filterOrder.cuisine;
      else if(response.filterOrder.type.length)this.dataSource.filter = response.filterOrder.type;
      else if(response.filterOrder.value.length)this.dataSource.filter = response.filterOrder.value;
    })
    this.displayedColumns = ['item_name','cuisine','type','price','order_date','order_time']
  }

  sortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnDestroy(): void {
    this.orderSubscription.unsubscribe();
  }

}
