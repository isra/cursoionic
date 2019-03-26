import { Component, OnInit, ViewChild } from '@angular/core';

import { IonInfiniteScroll } from '@ionic/angular'

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any): any {
    console.log('infinite scroll event', event);

    if (this.data.length > 50) {
      this.infiniteScroll.disabled = true;
      event.target.complete();
      return false;
    }

    setTimeout(() => {
      const newData = new Array(20);
      this.data.push(...newData);
      event.target.complete();
    }, 1000);
  }

}
