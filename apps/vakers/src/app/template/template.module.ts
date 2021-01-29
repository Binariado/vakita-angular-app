import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialModule
  ]
})
export class TemplateModule { }
