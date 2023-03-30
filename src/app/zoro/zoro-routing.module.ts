import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoroPage } from './zoro.page';

const routes: Routes = [
  {
    path: 'zoro',
    component: ZoroPage,
    children: [
      {
        path: 'zorobio',
        loadChildren: () => import('./zorobio/zorobio.module').then( m => m.ZorobioPageModule)
      },
      {
        path: 'zoropowers',
        loadChildren: () => import('./zoropowers/zoropowers.module').then( m => m.ZoropowersPageModule)
      },
      {
        path: '',
        redirectTo: 'zoro/zorobio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'zoro/zorobio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoroPageRoutingModule {}
