import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../material-module';
import { VakiCardComponent } from '../../components/vaki-card/vaki-card.component';
import { MatCardModule } from '@angular/material/card';
import { VakiContentComponent } from './vaki-content/vaki-content.component';

@NgModule({
  declarations: [
    HomeComponent,
    VakiCardComponent,
    VakiContentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MaterialModule
  ]
})
export class HomeModule { }
