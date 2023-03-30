import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsoppbioPageRoutingModule } from './usoppbio-routing.module';

import { UsoppbioPage } from './usoppbio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsoppbioPageRoutingModule
  ],
  declarations: [UsoppbioPage]
})
export class UsoppbioPageModule {}
