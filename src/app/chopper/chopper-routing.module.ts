import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChopperPage } from './chopper.page';

const routes: Routes = [
  {
    path: 'chopper',
    component: ChopperPage,
    children: [
      {
        path: 'chopperbio',
        loadChildren: () => import('./chopperbio/chopperbio.module').then( m => m.ChopperbioPageModule)
      },
      {
        path: 'chopperpower',
        loadChildren: () => import('./chopperpower/chopperpower.module').then( m => m.ChopperpowerPageModule)
      },
      {
        path: '',
        redirectTo: 'chopper/chopperbio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'chopper/chopperbio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChopperPageRoutingModule {}
