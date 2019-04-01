import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  items: ItemComponent[] = [
    {
      icon: 'alert',
      label: 'Alert',
      path: '/alert'
    },
    {
      icon: 'magnet',
      label: 'Action Sheet',
      path: '/action-sheet'
    },
    {
      icon: 'contacts',
      label: 'Avatar',
      path: '/avatar'
    },
    {
      icon: 'radio-button-off',
      label: 'Buttons',
      path: '/buttons'
    },
    {
      icon: 'card',
      label: 'Cards',
      path: '/card'

    },
    {
      icon: 'checkbox-outline',
      label: 'Checkbox',
      path: '/checkbox'
    },
    {
      icon: 'calendar',
      label: 'Calendar',
      path: '/date-time'
    },
    {
      icon: 'flag',
      label: 'Fabs',
      path: '/fabs'
    },
    {
      icon: 'grid',
      label: 'Grid',
      path: '/grid'
    },
    {
      icon: 'infinite',
      label: 'Infinite Scroll',
      path: '/infinite-scroll'
    },
    {
      icon: 'text',
      label: 'Inputs',
      path: '/input'
    },
    {
      icon: 'list',
      label: 'List',
      path: '/list'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}


interface ItemComponent {
  icon: string;
  label: string;
  path: string;
}