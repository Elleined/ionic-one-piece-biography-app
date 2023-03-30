import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrookpowersPage } from './brookpowers.page';

const routes: Routes = [
  {
    path: '',
    component: BrookpowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrookpowersPageRoutingModule {}
