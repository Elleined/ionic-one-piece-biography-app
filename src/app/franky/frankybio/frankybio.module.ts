import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrankybioPageRoutingModule } from './frankybio-routing.module';

import { FrankybioPage } from './frankybio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrankybioPageRoutingModule
  ],
  declarations: [FrankybioPage]
})
export class FrankybioPageModule {}
