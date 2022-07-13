import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersView } from './components/orders/orders.view';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderFilterComponent } from './components/order-filter/order-filter.component';
import { OrderRouting } from './order-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrdersView,
    OrderListComponent,
    OrderFilterComponent
  ],
  imports: [
    CommonModule,
    OrderRouting,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class OrderModule { }
