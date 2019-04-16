import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {

    setTimeout(() => {
      event.detail.complete();
      this.items = Array(20);
    }, 1000);

  }

}
