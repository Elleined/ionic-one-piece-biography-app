import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RobinPage } from './robin.page';

const routes: Routes = [
  {
    path: 'robin',
    component: RobinPage,
    children: [
      {
        path: 'robinbio',
        loadChildren: () => import('./robinbio/robinbio.module').then( m => m.RobinbioPageModule)
      },
      {
        path: 'robinpowers',
        loadChildren: () => import('./robinpowers/robinpowers.module').then( m => m.RobinpowersPageModule)
      },
      {
        path: '',
        redirectTo: 'robin/robinbio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'robin/robinbio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RobinPageRoutingModule {}
