import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZorobioPage } from './zorobio.page';

const routes: Routes = [
  {
    path: '',
    component: ZorobioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZorobioPageRoutingModule {}
