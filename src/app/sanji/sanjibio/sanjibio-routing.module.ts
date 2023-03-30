import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanjibioPage } from './sanjibio.page';

const routes: Routes = [
  {
    path: '',
    component: SanjibioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanjibioPageRoutingModule {}
