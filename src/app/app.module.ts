import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopBarComponent,
    StorePageComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
