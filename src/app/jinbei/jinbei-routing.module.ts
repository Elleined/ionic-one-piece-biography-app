import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JinbeiPage } from './jinbei.page';

const routes: Routes = [
  {
    path: 'jinbei',
    component: JinbeiPage,
    children: [
      {
        path: 'jinbeibio',
        loadChildren: () => import('./jinbeibio/jinbeibio.module').then( m => m.JinbeibioPageModule)
      },
      {
        path: 'jinbeipowers',
        loadChildren: () => import('./jinbeipowers/jinbeipowers.module').then( m => m.JinbeipowersPageModule)
      },
      {
        path: '',
        redirectTo: 'jinbei/jinbeibio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'jinbei/jinbeibio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JinbeiPageRoutingModule {}
