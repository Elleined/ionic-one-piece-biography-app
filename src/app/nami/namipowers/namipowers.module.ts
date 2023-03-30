import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamipowersPageRoutingModule } from './namipowers-routing.module';

import { NamipowersPage } from './namipowers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamipowersPageRoutingModule
  ],
  declarations: [NamipowersPage]
})
export class NamipowersPageModule {}
