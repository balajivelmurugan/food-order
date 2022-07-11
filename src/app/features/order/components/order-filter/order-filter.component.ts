import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.component.html',
  styleUrls: ['./order-filter.component.scss']
})
export class OrderFilterComponent implements OnInit {

  filters: any = {};
  @Output() filterData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  filterUpdate(property: string, value:string){
    this.filters[property] = value;
  }

  clearFilter(property: string){
    this.filters[property]= '';
  }

}
