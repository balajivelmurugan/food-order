import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MenuStore } from 'src/app/shared/services/menu/menu.store';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../types/menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, OnDestroy {

  menuListSubscription : Subscription = new Subscription();
  menuListItems: Menu[] = [];

  constructor(private MService: MenuService, public store: MenuStore) { }

  ngOnInit(): void {
    this.menuListSubscription = this.MService.getMenuList().subscribe({next: (response: Menu[]) => {
      response.map(item => item.quantity = 0);
      this.store.updateMenuItems(response);
    },
    error: (error) => {
      console.log(error);
    } });
  }

  moveToTop(){
    window.scroll(0,0);
  }

  ngOnDestroy(){
    this.menuListSubscription.unsubscribe();
  }

}
