import { Routes } from '@angular/router';
import {  MainLayoutComponent } from './main-layout/main-layout.component';
import { MAIN_LAYOUT_ROUTES } from '../routers/main-layout-routes';

export const TEMPLATE_ROUTES: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: MAIN_LAYOUT_ROUTES,
  }
];

