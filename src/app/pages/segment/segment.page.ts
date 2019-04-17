import { Component, OnInit, ViewChild } from '@angular/core';

import { IonSegment } from '@ionic/angular';

import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild('segmentHeroes') segment: IonSegment;

  valueSegment: string;
  heroes: Observable<any>;

  constructor(
    private dataService: DataService
  ) {
    this.valueSegment = '';
  }

  ngOnInit() {
    this.segment.value = this.valueSegment;
    this.heroes = this.dataService.getHeroes();
  }

  segmentChanged(event: any): void {
    this.valueSegment = event.detail.value;
  }

}
