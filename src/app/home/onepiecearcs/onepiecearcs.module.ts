import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnepiecearcsPageRoutingModule } from './onepiecearcs-routing.module';

import { OnepiecearcsPage } from './onepiecearcs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnepiecearcsPageRoutingModule
  ],
  declarations: [OnepiecearcsPage]
})
export class OnepiecearcsPageModule {}
