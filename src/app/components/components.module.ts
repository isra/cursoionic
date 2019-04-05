import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    HeaderBarComponent,
    MenuComponent
  ],
  exports: [
    HeaderBarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
