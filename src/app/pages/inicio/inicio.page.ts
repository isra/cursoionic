import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';

import { ItemMenu } from '../../interfaces/item-menu';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

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