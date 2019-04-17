import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {

  progress: number = 0;

  constructor() { }

  ngOnInit() {
  }

  changeRange(event: any): void {
    this.progress = +event.detail.value / 100;
  }

}
