import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoropowersPageRoutingModule } from './zoropowers-routing.module';

import { ZoropowersPage } from './zoropowers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoropowersPageRoutingModule
  ],
  declarations: [ZoropowersPage]
})
export class ZoropowersPageModule {}
