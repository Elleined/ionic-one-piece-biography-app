import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoppPageRoutingModule } from './usopp-routing.module';

import { UsoppPage } from './usopp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoppPageRoutingModule
  ],
  declarations: [UsoppPage]
})
export class UsoppPageModule {}
