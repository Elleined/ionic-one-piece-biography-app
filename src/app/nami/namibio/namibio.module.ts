import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamibioPageRoutingModule } from './namibio-routing.module';

import { NamibioPage } from './namibio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamibioPageRoutingModule
  ],
  declarations: [NamibioPage]
})
export class NamibioPageModule {}
