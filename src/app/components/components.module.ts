import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderBarComponent } from './header-bar/header-bar.component';


@NgModule({
  declarations: [
    HeaderBarComponent
  ],
  exports: [
    HeaderBarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
