import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SettingItemsComponent } from './components/setting-items/setting-items.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopBarComponent,
    SettingItemsComponent,
    AccountPageComponent,
    StorePageComponent,
    FrontPageComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
