import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrankyPageRoutingModule } from './franky-routing.module';

import { FrankyPage } from './franky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrankyPageRoutingModule
  ],
  declarations: [FrankyPage]
})
export class FrankyPageModule {}
