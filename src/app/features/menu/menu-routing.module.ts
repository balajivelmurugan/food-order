import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuView } from "./components/menu/menu.view";


const routes: Routes = [
  {
    path: '',
    component: MenuView
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MenuRouting { }
