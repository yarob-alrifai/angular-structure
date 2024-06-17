import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListItemComponent } from './components/blog-list-item/blog-list-item.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { BlogHeaderImageComponent } from './components/blog-header-image/blog-header-image.component';


@NgModule({
  declarations: [
    BlogCreateComponent,
    BlogDetailsComponent,
    BlogListComponent,
    BlogListItemComponent,
    BlogHeaderComponent,
    BlogHeaderImageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogsModule { }
