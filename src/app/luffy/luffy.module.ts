import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuffyPageRoutingModule } from './luffy-routing.module';

import { LuffyPage } from './luffy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuffyPageRoutingModule
  ],
  declarations: [LuffyPage]
})
export class LuffyPageModule {}
