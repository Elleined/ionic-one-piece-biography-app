import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnepiecePage } from './onepiece.page';

const routes: Routes = [
  {
    path: '',
    component: OnepiecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnepiecePageRoutingModule {}
