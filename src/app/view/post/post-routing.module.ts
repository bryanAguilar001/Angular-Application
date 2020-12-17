import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component';
import { PostContentComponent } from './post-content/post-content.component';

const routes: Routes = [
  { path: '', component: PostPageComponent, data: { title: 'Post Page' } },
  { path: 'content', component: PostContentComponent, data: { title: 'Post Content' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
