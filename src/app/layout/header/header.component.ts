import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/features/menu/types/menu';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount: number = 0;
  cartList: Menu[] = [];

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart._cartDetails$.subscribe({next: (response) => {
      if(!Object.keys(response).length){return;}
      if(this.cartList.length === 0){
        this.cartList.push(response);
      }else if(response.quantity === 0){
        const index: number = this.cartList.findIndex(item => item.name === response.name);
        this.cartList.splice(index, 1);
      }else{
        const index: number = this.cartList.findIndex(item => item.name === response.name);
        if (index > -1) this.cartList[index] = response; // (2)
        else this.cartList.push(response);
    }
      this.cartCount = this.cartList.length;
    }})
  }

}
