import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanjibioPageRoutingModule } from './sanjibio-routing.module';

import { SanjibioPage } from './sanjibio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanjibioPageRoutingModule
  ],
  declarations: [SanjibioPage]
})
export class SanjibioPageModule {}
