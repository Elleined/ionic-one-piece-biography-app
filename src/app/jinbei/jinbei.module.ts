import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JinbeiPageRoutingModule } from './jinbei-routing.module';

import { JinbeiPage } from './jinbei.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JinbeiPageRoutingModule
  ],
  declarations: [JinbeiPage]
})
export class JinbeiPageModule {}
