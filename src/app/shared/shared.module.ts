import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularMaterialModule
  ],
  exports: [
    CartComponent
  ]
})
export class SharedModule { }
