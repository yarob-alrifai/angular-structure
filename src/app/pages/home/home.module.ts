import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppHomeComponent } from './app-home/app-home.component';
import { BlogsModule } from 'src/app/features/blogs/blogs.module';
import { UsersModule } from 'src/app/features/users/users.module';


@NgModule({
  declarations: [
    AppHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BlogsModule,
    UsersModule
  ]
})
export class HomeModule { }
