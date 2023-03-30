import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JinbeibioPage } from './jinbeibio.page';

const routes: Routes = [
  {
    path: '',
    component: JinbeibioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JinbeibioPageRoutingModule {}
