import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamiPageRoutingModule } from './nami-routing.module';

import { NamiPage } from './nami.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamiPageRoutingModule
  ],
  declarations: [NamiPage]
})
export class NamiPageModule {}
