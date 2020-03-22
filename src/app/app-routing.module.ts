import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginComponent } from './components/login/login.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { CreateCardComponent } from './pages/create-card/create-card.component';
import { SplashPageComponent } from './pages/splash-page/splash-page.component';
import { AccountPageComponent } from "./pages/account-page/account-page.component";
import { AccountSettingsPageComponent } from "./pages/account-settings-page/account-settings-page.component";


const routes: Routes = [
  { path:'account', component: AccountPageComponent},
  { path:'account/settings', component: AccountSettingsPageComponent},
  { path: 'store', component: StorePageComponent}, 
  { path:'createCard', component:CreateCardComponent}
  { path: 'login', component: LoginComponent},
  { path: 'store', component: StorePageComponent},
  { path: 'front', component: FrontPageComponent },
  { path: '', component: SplashPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

