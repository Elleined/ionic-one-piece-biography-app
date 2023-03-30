import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanjiPage } from './sanji.page';

const routes: Routes = [
  {
    path: 'sanji',
    component: SanjiPage,
    children: [
      {
        path: 'sanjibio',
        loadChildren: () => import('./sanjibio/sanjibio.module').then( m => m.SanjibioPageModule)
      },
      {
        path: 'sanjipowers',
        loadChildren: () => import('./sanjipowers/sanjipowers.module').then( m => m.SanjipowersPageModule)
      },
      {
        path: '',
        redirectTo: 'sanji/sanjibio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'sanji/sanjibio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanjiPageRoutingModule {}
