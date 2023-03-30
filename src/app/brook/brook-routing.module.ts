import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrookPage } from './brook.page';

const routes: Routes = [
  {
    path: 'brook',
    component: BrookPage,
    children: [
      {
        path: 'brookpowers',
        loadChildren: () => import('./brookpowers/brookpowers.module').then( m => m.BrookpowersPageModule)
      },
      {
        path: 'brookbio',
        loadChildren: () => import('./brookbio/brookbio.module').then( m => m.BrookbioPageModule)
      },
      {
        path: '',
        redirectTo: 'brook/brookbio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'brook/brookbio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrookPageRoutingModule {}
