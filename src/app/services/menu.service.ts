import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemMenu } from '../interfaces/item-menu';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private url = '/assets/itemsmenu.json';

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<ItemMenu[]> {
    return this.http.get<ItemMenu[]>(this.url);
  }
}
