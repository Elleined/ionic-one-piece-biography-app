import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RobinbioPageRoutingModule } from './robinbio-routing.module';

import { RobinbioPage } from './robinbio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RobinbioPageRoutingModule
  ],
  declarations: [RobinbioPage]
})
export class RobinbioPageModule {}
