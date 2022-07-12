import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/features/menu/types/menu';
import { CartService } from 'src/app/shared/services/cart.service';
import { MenuStore } from 'src/app/shared/services/menu/menu.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount: number = 0;
  cartList: Menu[] = [];

  constructor(private cart: CartService, public store: MenuStore) { }

  ngOnInit(): void {
  }

}
