import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { MenuService } from '../../services/menu.service';
import { ItemMenu } from '../../interfaces/item-menu';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pop-list',
  templateUrl: './pop-list.component.html',
  styleUrls: ['./pop-list.component.scss'],
})
export class PopListComponent implements OnInit {

  items: Observable<ItemMenu[]>;

  constructor(
    private menu: MenuService,
    private popoverCtr: PopoverController
  ) { }

  ngOnInit() {
    this._menu();
  }


  _menu(): void {
    this.items = this.menu.getItems();
  }

  continue(item: ItemMenu): void {

    console.log('Item', item);
    this.popoverCtr.dismiss(item);


  }

}
