import { NgModule } from "@angular/core";
import { MatRippleModule } from "@angular/material/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatRippleModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
    MatRippleModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule { }
