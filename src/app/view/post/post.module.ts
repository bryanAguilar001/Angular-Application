import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostPageComponent } from './post-page/post-page.component';
import { PostContentComponent } from './post-content/post-content.component';


@NgModule({
  declarations: [PostPageComponent, PostContentComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
