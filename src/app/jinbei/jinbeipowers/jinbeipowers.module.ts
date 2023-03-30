import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JinbeipowersPageRoutingModule } from './jinbeipowers-routing.module';

import { JinbeipowersPage } from './jinbeipowers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JinbeipowersPageRoutingModule
  ],
  declarations: [JinbeipowersPage]
})
export class JinbeipowersPageModule {}
