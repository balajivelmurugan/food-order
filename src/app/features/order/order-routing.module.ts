import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersView } from "./components/orders/orders.view";


const routes: Routes = [
  {
    path: '',
    component: OrdersView
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrderRouting { }
