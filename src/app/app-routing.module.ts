import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { AdminComponent } from './admin/admin.component';
import { CreateblogComponent } from './createblog/createblog.component';
import {UserListComponent} from './user-list/user-list.component'
import {UserPostComponent} from './user-post/user-post.component'

const routes: Routes = [
  {
    path:'user-list',
    component: UserListComponent,
    children:[
      {
        path:'post',
        component:UserPostComponent
      }
    
  ]
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'admin-post',
        component:AdminPostComponent
      }
    ]
  },
  {
    path:'create',
    component:CreateblogComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
