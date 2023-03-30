import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZorobioPageRoutingModule } from './zorobio-routing.module';

import { ZorobioPage } from './zorobio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZorobioPageRoutingModule
  ],
  declarations: [ZorobioPage]
})
export class ZorobioPageModule {}
