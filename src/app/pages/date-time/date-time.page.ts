import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNac = new Date();
  customPickerOptions = {
    buttons: [{
      text: 'Save',
      handler: (event) => {
        console.log('Clicked Save!', event);
      }
    }, {
      text: 'Log',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return true;
      }
    }]
  };

  customDayShortNames = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
  ];

  constructor() { }

  ngOnInit() {
    console.log('this.fechaNac', this.fechaNac);
  }


  changeDate(calendar): void {
    console.log('calendar', new Date(calendar.detail.value));
  }

  change(calendar): void {
    console.log('calendar', calendar);
  }


}
