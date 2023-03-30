import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrankybioPage } from './frankybio.page';

const routes: Routes = [
  {
    path: '',
    component: FrankybioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrankybioPageRoutingModule {}
