import { Component, OnInit, ViewChild } from '@angular/core';

import { IonList, ToastController } from '@ionic/angular';

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
    private usersService: UsersService,
    private toastCtrl: ToastController
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
    this.presentToast('Agregado a favoritos');
    this.list.closeSlidingItems();
  }
  share(user: any): void {
    console.log('share', user);
    this.presentToast('Compartido!!!');
    this.list.closeSlidingItems();
  }
  remove(user: any): void {
    this.presentToast('Se ha eliminado');
    this.list.closeSlidingItems();
  }


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'primary',
      showCloseButton: true,
      closeButtonText: 'cerrar'
    });

    toast.present();
  }

}
