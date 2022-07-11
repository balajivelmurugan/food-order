import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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

  constructor(private MService: MenuService) { }

  ngOnInit(): void {
    console.log("menu");
    this.menuListSubscription = this.MService.getMenuList().subscribe({next: (response: Menu[]) => {
      response.map(item => item.quantity = 0);

      console.log(response);
      this.menuListItems = response;
    },
    error: (error) => {
      console.log(error);
    } });
  }

  ngOnDestroy(){
    this.menuListSubscription.unsubscribe();
  }

}
