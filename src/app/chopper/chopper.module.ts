import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChopperPageRoutingModule } from './chopper-routing.module';

import { ChopperPage } from './chopper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChopperPageRoutingModule
  ],
  declarations: [ChopperPage]
})
export class ChopperPageModule {}
