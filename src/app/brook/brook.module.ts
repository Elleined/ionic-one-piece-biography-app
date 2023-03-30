import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrookPageRoutingModule } from './brook-routing.module';

import { BrookPage } from './brook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrookPageRoutingModule
  ],
  declarations: [BrookPage]
})
export class BrookPageModule {}
