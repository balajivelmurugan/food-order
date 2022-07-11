import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from 'src/app/features/menu/types/menu';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartDetails$ : BehaviorSubject<Menu> = new BehaviorSubject({} as Menu);
  _cartDetails$ = this.cartDetails$.asObservable();


  constructor() { }

  updateCartDetails(item: Menu){
    this.cartDetails$.next(item);
  }

}
