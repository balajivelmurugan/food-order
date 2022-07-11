import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Menu } from '../../types/menu';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {

  @Input() menuItem: Menu = {} as Menu;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  test(event: any){
    console.log(event)
  }

  addToCart(item: Menu){
    this.cartService.updateCartDetails(item);
  }

  removeCartItems(item: Menu){
    //let cartItems: = this.cartService.cartDetails$.getValue();
    //cartItems
    this.cartService.updateCartDetails(item);
  }
}
