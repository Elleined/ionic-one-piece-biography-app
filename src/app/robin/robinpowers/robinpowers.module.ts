import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RobinpowersPageRoutingModule } from './robinpowers-routing.module';

import { RobinpowersPage } from './robinpowers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RobinpowersPageRoutingModule
  ],
  declarations: [RobinpowersPage]
})
export class RobinpowersPageModule {}
