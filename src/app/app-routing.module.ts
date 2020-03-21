import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginComponent } from './components/login/login.component';


import { AccountPageComponent } from "./pages/account-page/account-page.component";


const routes: Routes = [
  { path:'', component: TopBarComponent },
  { path:'login', component: LoginComponent},
  { path:'account', component: AccountPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
