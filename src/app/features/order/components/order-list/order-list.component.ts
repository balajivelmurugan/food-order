import { formatDate } from '@angular/common';
import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../types/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  //ordersList: Order[]= [];
  @Input() filteredList: Order[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
