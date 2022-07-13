import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { MenuStore } from 'src/app/shared/services/menu/menu.store';
import { Menu } from '../../types/menu';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  @Input() menuItem: Menu = {} as Menu;
  period: string = "Dinner";
  constructor(public storeM: MenuStore) {
   }

  ngOnInit(): void {

    this.storeM.state$.subscribe(response => {
      if(!response.cartItems.length){
        this.menuItem.quantity = 0;
      }
    })
  }

  addToCart(item: Menu){
    this.storeM.addCartItem(item);
  }

  removeCartItems(item: Menu){
    if(item.quantity === 0)
    this.storeM.removeCartItem(item);
  }
}
