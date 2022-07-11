import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/features/menu/types/menu';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cartDataList !: Menu[];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  updateCart(item: Menu){

  }
  removeCart(item: Menu){
    this.cartService.updateCartDetails(item);
  }
}
