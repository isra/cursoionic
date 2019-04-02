import { Component, OnInit, ViewChild } from '@angular/core';

import { IonList } from '@ionic/angular';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') list: IonList;

  users: any[];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this._getUsers();
  }

  private _getUsers(): void {
    this.usersService.getData().subscribe(response => {
      this.users = response;
    }, err => {
      console.log("Error ListPage => getUsers", err);
    });
  }

  favorite(user: any): void {
    console.log('favorite', user);
    this.list.closeSlidingItems();
  }
  share(user: any): void {
    console.log('share', user);
    this.list.closeSlidingItems();
  }
  remove(user: any): void {
    console.log('remove', user);
    this.list.closeSlidingItems();
  }

}
