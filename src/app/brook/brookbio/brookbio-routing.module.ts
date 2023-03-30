import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrookbioPage } from './brookbio.page';

const routes: Routes = [
  {
    path: '',
    component: BrookbioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrookbioPageRoutingModule {}
