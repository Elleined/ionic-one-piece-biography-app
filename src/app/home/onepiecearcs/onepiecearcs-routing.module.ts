import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnepiecearcsPage } from './onepiecearcs.page';

const routes: Routes = [
  {
    path: '',
    component: OnepiecearcsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnepiecearcsPageRoutingModule {}
