import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrookpowersPageRoutingModule } from './brookpowers-routing.module';

import { BrookpowersPage } from './brookpowers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrookpowersPageRoutingModule
  ],
  declarations: [BrookpowersPage]
})
export class BrookpowersPageModule {}
