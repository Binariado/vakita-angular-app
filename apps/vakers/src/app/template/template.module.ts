import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from '../components/header/header.component';

import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialModule
  ]
})
export class TemplateModule { }
