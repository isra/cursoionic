import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { ItemMenu } from '../../interfaces/item-menu';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  items: Observable<ItemMenu[]>;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.loadMenu();
  }

  private loadMenu(): void {
    this.items = this.menuService.getItems();
  }

}
