import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'onepiece',
        loadChildren: () => import('./onepiece/onepiece.module').then( m => m.OnepiecePageModule)
      },
      {
        path: 'onepiecearcs',
        loadChildren: () => import('./onepiecearcs/onepiecearcs.module').then( m => m.OnepiecearcsPageModule)
      },
      {
        path: '',
        redirectTo: 'home/onepiece',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/onepiece',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
