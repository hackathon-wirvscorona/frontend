import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginComponent } from './components/login/login.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';


import { AccountPageComponent } from "./pages/account-page/account-page.component";
import { AccountSettingsPageComponent } from "./pages/account-settings-page/account-settings-page.component";


const routes: Routes = [
  { path:'', component: TopBarComponent },
  { path:'login', component: LoginComponent},
  { path:'account', component: AccountPageComponent},
  { path:'account/settings', component: AccountSettingsPageComponent},
  { path: 'store', component: StorePageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
