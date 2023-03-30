import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoppbioPage } from './usoppbio.page';

const routes: Routes = [
  {
    path: '',
    component: UsoppbioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoppbioPageRoutingModule {}
