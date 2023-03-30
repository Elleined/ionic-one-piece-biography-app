import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanjiPageRoutingModule } from './sanji-routing.module';

import { SanjiPage } from './sanji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanjiPageRoutingModule
  ],
  declarations: [SanjiPage]
})
export class SanjiPageModule {}
