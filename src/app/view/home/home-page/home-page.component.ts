import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    dots: false,
    margin: 35,
    navText: ['', ''],
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2,
      },
      768: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  }

}
