import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Módulo usado para animaciones de librerías externas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Módulo usado para realizar peticiones http
import { HttpClientModule } from '@angular/common/http';
//Módulos requeridos para el uso de formularios
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
//Módulo requerido para el carrusel
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { Page404Component } from './view/page404/page404.component';
import { LoginComponent } from './view/login/login.component';
import { HeaderComponent } from './view/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
