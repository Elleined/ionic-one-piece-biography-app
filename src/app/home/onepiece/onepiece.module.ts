import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnepiecePageRoutingModule } from './onepiece-routing.module';

import { OnepiecePage } from './onepiece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnepiecePageRoutingModule
  ],
  declarations: [OnepiecePage]
})
export class OnepiecePageModule {}
