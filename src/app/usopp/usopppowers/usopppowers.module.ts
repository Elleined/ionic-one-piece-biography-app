import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsopppowersPageRoutingModule } from './usopppowers-routing.module';

import { UsopppowersPage } from './usopppowers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsopppowersPageRoutingModule
  ],
  declarations: [UsopppowersPage]
})
export class UsopppowersPageModule {}
