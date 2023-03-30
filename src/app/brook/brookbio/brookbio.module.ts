import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrookbioPageRoutingModule } from './brookbio-routing.module';

import { BrookbioPage } from './brookbio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrookbioPageRoutingModule
  ],
  declarations: [BrookbioPage]
})
export class BrookbioPageModule {}
