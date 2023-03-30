import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'luffy',
    loadChildren: () => import('./luffy/luffy.module').then( m => m.LuffyPageModule)
  },
  {
    path: 'zoro',
    loadChildren: () => import('./zoro/zoro.module').then( m => m.ZoroPageModule)
  },
  {
    path: 'nami',
    loadChildren: () => import('./nami/nami.module').then( m => m.NamiPageModule)
  },
  {
    path: 'usopp',
    loadChildren: () => import('./usopp/usopp.module').then( m => m.UsoppPageModule)
  },
  {
    path: 'sanji',
    loadChildren: () => import('./sanji/sanji.module').then( m => m.SanjiPageModule)
  },
  {
    path: 'chopper',
    loadChildren: () => import('./chopper/chopper.module').then( m => m.ChopperPageModule)
  },
  {
    path: 'robin',
    loadChildren: () => import('./robin/robin.module').then( m => m.RobinPageModule)
  },
  {
    path: 'franky',
    loadChildren: () => import('./franky/franky.module').then( m => m.FrankyPageModule)
  },
  {
    path: 'brook',
    loadChildren: () => import('./brook/brook.module').then( m => m.BrookPageModule)
  },
  {
    path: 'jinbei',
    loadChildren: () => import('./jinbei/jinbei.module').then( m => m.JinbeiPageModule)
  },
  {
    path: 'developers',
    loadChildren: () => import('./developers/developers.module').then( m => m.DevelopersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
