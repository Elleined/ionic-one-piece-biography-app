import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanjipowersPage } from './sanjipowers.page';

const routes: Routes = [
  {
    path: '',
    component: SanjipowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanjipowersPageRoutingModule {}
