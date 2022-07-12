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

  constructor(public store: MenuStore) { }

  ngOnInit(): void {
  }

  test(event: any){
    console.log(event)
  }

  addToCart(item: Menu){
    this.store.addCartItem(item);
  }

  removeCartItems(item: Menu){
    if(item.quantity === 0)
    this.store.removeCartItem(item);
  }
}
