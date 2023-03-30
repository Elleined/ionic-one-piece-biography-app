import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsoppPage } from './usopp.page';

const routes: Routes = [
  {
    path: 'usopp',
    component: UsoppPage,
    children: [
      {
        path: 'usoppbio',
        loadChildren: () => import('./usoppbio/usoppbio.module').then( m => m.UsoppbioPageModule)
      },
      {
        path: 'usopppowers',
        loadChildren: () => import('./usopppowers/usopppowers.module').then( m => m.UsopppowersPageModule)
      },
      {
        path: '',
        redirectTo: 'usopp/usoppbio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'usopp/usoppbio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsoppPageRoutingModule {}
