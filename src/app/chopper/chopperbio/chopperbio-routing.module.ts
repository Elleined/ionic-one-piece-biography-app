import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChopperbioPage } from './chopperbio.page';

const routes: Routes = [
  {
    path: '',
    component: ChopperbioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChopperbioPageRoutingModule {}
