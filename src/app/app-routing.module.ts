import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './view/page404/page404.component';
import { LoginComponent } from './view/login/login.component';


const routes: Routes = [
  { path: '404', component: Page404Component, data: { title: 'Page 404' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login Page' } },
  { path: 'home', loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule) },
  { path: 'post', loadChildren: () => import('./view/post/post.module').then(m => m.PostModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
