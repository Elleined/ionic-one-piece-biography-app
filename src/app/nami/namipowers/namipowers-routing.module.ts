import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamipowersPage } from './namipowers.page';

const routes: Routes = [
  {
    path: '',
    component: NamipowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamipowersPageRoutingModule {}
