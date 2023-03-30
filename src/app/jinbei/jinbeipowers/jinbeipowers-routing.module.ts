import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JinbeipowersPage } from './jinbeipowers.page';

const routes: Routes = [
  {
    path: '',
    component: JinbeipowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JinbeipowersPageRoutingModule {}
