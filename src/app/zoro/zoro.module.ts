import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoroPageRoutingModule } from './zoro-routing.module';

import { ZoroPage } from './zoro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoroPageRoutingModule
  ],
  declarations: [ZoroPage]
})
export class ZoroPageModule {}
