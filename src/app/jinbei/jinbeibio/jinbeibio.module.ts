import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JinbeibioPageRoutingModule } from './jinbeibio-routing.module';

import { JinbeibioPage } from './jinbeibio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JinbeibioPageRoutingModule
  ],
  declarations: [JinbeibioPage]
})
export class JinbeibioPageModule {}
