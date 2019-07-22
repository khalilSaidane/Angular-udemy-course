import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PostsComponent} from './components/posts/posts.component';
import {UsersComponent} from './components/users/users.component';
import {PostComponent} from './components/post/post.component';
import {PostNotFoundComponent} from './components/post-not-found/post-not-found.component';

const routes: Routes = [
  {path : '' , component: HomeComponent },
  {path : 'posts' , component: PostsComponent},
  {path : 'users' , component: UsersComponent},
  {path : 'post/:id' , component: PostComponent},
  {path : '**' , component: PostNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
