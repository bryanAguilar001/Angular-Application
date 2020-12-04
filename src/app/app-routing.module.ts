import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { Page404Component } from './view/page404/page404.component';
import { LoginComponent } from './view/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
