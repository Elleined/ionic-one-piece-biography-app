import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChopperbioPageRoutingModule } from './chopperbio-routing.module';

import { ChopperbioPage } from './chopperbio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChopperbioPageRoutingModule
  ],
  declarations: [ChopperbioPage]
})
export class ChopperbioPageModule {}
