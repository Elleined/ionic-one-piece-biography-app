import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RobinbioPage } from './robinbio.page';

const routes: Routes = [
  {
    path: '',
    component: RobinbioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RobinbioPageRoutingModule {}
