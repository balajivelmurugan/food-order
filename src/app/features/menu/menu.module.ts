import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuView } from './components/menu/menu.view';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuRouting } from './menu-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuFiltersComponent } from './components/menu-filters/menu-filters.component';



@NgModule({
  declarations: [
    MenuView,
    MenuListComponent,
    MenuCardComponent,
    MenuFiltersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MenuRouting,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class MenuModule { }
