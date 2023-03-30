import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsopppowersPage } from './usopppowers.page';

const routes: Routes = [
  {
    path: '',
    component: UsopppowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsopppowersPageRoutingModule {}
