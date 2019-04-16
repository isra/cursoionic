import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopListComponent } from '../../components/pop-list/pop-list.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  async showList(ev: any) {

    const popover = await this.popoverCtrl.create({
      component: PopListComponent,
      event: ev,
      translucent: true
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();

    console.log('data', data);

  }

}
