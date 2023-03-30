import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrankypowersPage } from './frankypowers.page';

const routes: Routes = [
  {
    path: '',
    component: FrankypowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrankypowersPageRoutingModule {}
