import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UsersModule} from './users/users.module';
import { AdminComponent } from './admin/admin.component';
import { UserPostComponent } from './user-post/user-post.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { CreateblogComponent } from './createblog/createblog.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AdminComponent,
    UserPostComponent,
    AdminPostComponent,
    CreateblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
