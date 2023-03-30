import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuffyPage } from './luffy.page';

const routes: Routes = [
  {
    path: 'luffy',
    component: LuffyPage,
    children: [
      {
        path: 'biography',
        loadChildren: () => import('./biography/biography.module').then(m => m.BiographyPageModule)
      },
      {
        path: 'powers',
        loadChildren: () => import('./powers/powers.module').then(m => m.PowersPageModule)
      },
      {
        path: '',
        redirectTo: 'luffy/biography',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'luffy/biography',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuffyPageRoutingModule { }
