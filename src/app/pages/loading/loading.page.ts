import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  private loading: any;

  constructor(
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this._initLoading(1500, "Espera...");
  }

  private async _initLoading(duration: number, message: string) {

    this.loading = await this.loadingCtrl.create({
      message,
      spinner: 'crescent'
    });

    await this.loading.present();

    setTimeout(() => {
      this.loading.dismiss();
    }, duration);

  }

}
