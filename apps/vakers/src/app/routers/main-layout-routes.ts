import { Routes } from '@angular/router';
import { VakiComponent } from '../views/vaki/vaki.component';

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('../views/home/home.module').then(m => m.HomeModule)
  },
  { path: 'vaki/:vaki', component: VakiComponent }
]