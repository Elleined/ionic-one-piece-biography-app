import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RobinPageRoutingModule } from './robin-routing.module';

import { RobinPage } from './robin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RobinPageRoutingModule
  ],
  declarations: [RobinPage]
})
export class RobinPageModule {}
