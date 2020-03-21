import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginComponent } from './components/login/login.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';


const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path: 'store', component: StorePageComponent}, 
  { path:'', component: FrontPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
