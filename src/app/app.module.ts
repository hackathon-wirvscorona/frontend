import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SettingItemsComponent } from './components/setting-items/setting-items.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AccountSettingsPageComponent } from './pages/account-settings-page/account-settings-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { SplashPageComponent } from './pages/splash-page/splash-page.component';
import { NaturalSelectComponent } from './components/natural-select/natural-select.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopBarComponent,
    SettingItemsComponent,
    AccountPageComponent,
    AccountSettingsPageComponent,
    AccountPageComponent,
    AccountPageComponent,
    StorePageComponent,
    FrontPageComponent,
    SplashPageComponent,
    NaturalSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }