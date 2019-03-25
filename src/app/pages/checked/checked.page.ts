import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checked',
  templateUrl: './checked.page.html',
  styleUrls: ['./checked.page.scss'],
})
export class CheckedPage implements OnInit {

  items: any[] = [
    {
      name: 'lunes',
      label: 'Lunes',
      checked: false,
      color: 'primary'
    },
    {
      name: 'martes',
      label: 'Martes',
      checked: true,
      color: 'secondary'
    },
    {
      name: 'miercoles',
      label: 'Miércoles',
      checked: false,
      color: 'tertiary'
    },
    {
      name: 'jueves',
      label: 'Jueves',
      checked: true,
      color: 'danger'
    },
    {
      name: 'viernes',
      label: 'Viernes',
      checked: false,
      color: 'light'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  checkItem(check: any): void {
    console.log(check);

  }

}
