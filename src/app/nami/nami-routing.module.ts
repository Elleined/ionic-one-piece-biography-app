import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamiPage } from './nami.page';

const routes: Routes = [
  {
    path: 'nami',
    component: NamiPage,
    children: [
      {
        path: 'namibio',
        loadChildren: () => import('./namibio/namibio.module').then( m => m.NamibioPageModule)
      },
      {
        path: 'namipowers',
        loadChildren: () => import('./namipowers/namipowers.module').then( m => m.NamipowersPageModule)
      },
      {
        path: '',
        redirectTo: 'nami/namibio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'nami/namibio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamiPageRoutingModule {}
