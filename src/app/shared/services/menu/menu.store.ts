import { Injectable } from "@angular/core";
import { Menu } from "src/app/features/menu/types/menu";
import { Store } from "../store";
import { MenuState } from "./menu.store.state";

@Injectable({providedIn: 'root'})
export class MenuStore extends Store<MenuState>{

  constructor(){
    super(new MenuState())
  }

  updateMenuItems(items: Menu[]):void {
    this.setState({
      ...this.state,
      menuItems: [
        ...this.state.menuItems, ...items
      ]
    })
  }

  addCartItem(item: Menu): void {
    this.setState({
      ...this.state,
      cartItems: [
        ...new Set([...this.state.cartItems, item])
      ]
    })
    console.log(this.state.cartItems);
  }

  removeCartItem(item: Menu): void{
    let index: number = this.state.cartItems.indexOf(item);
    this.state.cartItems.splice(index, 1);
    console.log(index);
    this.setState({
      ...this.state,
      cartItems:[
        ...this.state.cartItems, ...this.state.cartItems
      ]
    })
    console.log(this.state.cartItems);
  }

  clearCartItem(): void{
    this.state.cartItems = [];
    this.setState({
      ...this.state,
      cartItems:[
        ...this.state.cartItems, ...this.state.cartItems
      ]
    })
  }

}
