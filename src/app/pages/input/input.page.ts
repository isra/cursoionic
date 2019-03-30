import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  user: any = {
    name: '',
    email: '',
    age: 0
  };

  constructor() { }

  ngOnInit() {
  }

  enviar(): void {
    console.log('Datos enviados');
    console.log(this.user);
  }

}
