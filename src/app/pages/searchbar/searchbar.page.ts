import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  items: any[] = [];
  valueFilter: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this._loadData();
  }

  filter(event: any): void {
    this.valueFilter = event.detail.value;

  }

  private _loadData(): void {
    this.dataService.getAlbums().subscribe(response => {
      this.items = response;
    });
  }

}
