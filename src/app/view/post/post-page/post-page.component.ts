import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public video_section:boolean = true;
  public article_section:boolean = false;

  changeSection(){
    this.video_section = !this.video_section;
    this.article_section = !this.article_section;
  }

}
