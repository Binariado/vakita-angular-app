import { Routes } from '@angular/router';

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('../views/home/home.module').then(m => m.HomeModule)
  }
]