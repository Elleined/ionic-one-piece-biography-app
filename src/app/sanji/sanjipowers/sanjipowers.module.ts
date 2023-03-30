import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanjipowersPageRoutingModule } from './sanjipowers-routing.module';

import { SanjipowersPage } from './sanjipowers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanjipowersPageRoutingModule
  ],
  declarations: [SanjipowersPage]
})
export class SanjipowersPageModule {}
