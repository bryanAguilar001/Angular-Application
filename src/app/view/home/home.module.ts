import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

//Módulo requerido para el carrusel
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
  ]
})
export class HomeModule { }
