import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../types/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenuList(): Observable<Menu[]>{
    return this.http.get<Menu[]>('/assets/mock-data/menu.json');
  }
}
