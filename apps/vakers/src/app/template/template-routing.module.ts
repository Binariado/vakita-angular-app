import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  MainLayoutComponent } from './main-layout/main-layout.component';
import { MAIN_LAYOUT_ROUTES } from '../routers/main-layout-routes';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: MAIN_LAYOUT_ROUTES,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
