import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Módulo usado para animaciones de librerías externas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Módulo usado para realizar peticiones http
import { HttpClientModule } from '@angular/common/http';
//Módulos requeridos para el uso de formularios
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { Page404Component } from './view/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
