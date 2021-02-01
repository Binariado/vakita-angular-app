import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { TEMPLATE_ROUTES } from './template/template-routing'
const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
  // },
  {
    path: '',
    children: TEMPLATE_ROUTES
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }