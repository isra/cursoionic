import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  users: any[];
  reorder = true;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getData().subscribe(response => {
      this.users = response;
    });
  }


  itemReorder(event: any): void {

    const item = this.users.splice(event.detail.from, 1)[0];
    this.users.splice(event.detail.to, 0, item);
    event.detail.complete();
  }

  toggle(): void {
    this.reorder = !this.reorder;
  }

}
