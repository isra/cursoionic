import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.page.html',
  styleUrls: ['./modal-detail.page.scss'],
})
export class ModalDetailPage implements OnInit {

  @Input() name: string;
  @Input() lastname: string;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  salirSinParametros(): void {
    this.modalCtrl.dismiss();
  }

  salirConParametros(): void {
    this.modalCtrl.dismiss({
      name: 'isra',
      age: '33',
      job: 'Software Engineer'
    });
  }

}
