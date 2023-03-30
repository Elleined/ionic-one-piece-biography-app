import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChopperpowerPageRoutingModule } from './chopperpower-routing.module';

import { ChopperpowerPage } from './chopperpower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChopperpowerPageRoutingModule
  ],
  declarations: [ChopperpowerPage]
})
export class ChopperpowerPageModule {}
