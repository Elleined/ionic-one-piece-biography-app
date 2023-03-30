import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrankyPage } from './franky.page';

const routes: Routes = [
  {
    path: 'franky',
    component: FrankyPage,
    children: [
      {
        path: 'frankybio',
        loadChildren: () => import('./frankybio/frankybio.module').then( m => m.FrankybioPageModule)
      },
      {
        path: 'frankypowers',
        loadChildren: () => import('./frankypowers/frankypowers.module').then( m => m.FrankypowersPageModule)
      },
      {
        path: '',
        redirectTo: 'franky/frankybio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'franky/frankybio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrankyPageRoutingModule {}
