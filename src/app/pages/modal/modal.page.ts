import { Component, OnInit } from '@angular/core';

import { ModalDetailPage } from './modal-detail/modal-detail.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async abrirModal() {

    const modal = await this.modalCtrl.create({
      component: ModalDetailPage,
      componentProps: {
        name: 'Israel',
        lastName: 'Salgado'
      }
    });

    await modal.present();

  }

}