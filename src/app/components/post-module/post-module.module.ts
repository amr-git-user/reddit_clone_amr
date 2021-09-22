import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModuleRoutingModule } from './post-module-routing.module';
import { PostComponent } from './post/post.component';
import { RepliesComponent } from './replies/replies.component';
import { RepliesTwoComponent } from './replies-two/replies-two.component';


@NgModule({
  declarations: [PostComponent, RepliesComponent, RepliesTwoComponent],
  imports: [
    CommonModule,
    PostModuleRoutingModule
  ]
})
export class PostModuleModule { }
