import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { VakisService } from './services/vakis.service';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app.routing.module';
import { CardRewardsComponent } from './components/card-rewards/card-rewards.component';
import { VakiComponent } from './views/vaki/vaki.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './template/main-layout/main-layout.component';
import { VakiViewCardComponent } from './components/vaki-view-card/vaki-view-card.component';
import { VakiContentRewardsComponent } from './views/vaki/vaki-content-rewards/vaki-content-rewards.component';

@NgModule({
  declarations: [
    AppComponent, 
    CardRewardsComponent, 
    VakiComponent, 
    PageNotFoundComponent, 
    HeaderComponent, 
    MainLayoutComponent, 
    VakiViewCardComponent, 
    VakiContentRewardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    VakisService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
