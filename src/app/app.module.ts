import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostAuthComponent } from './post-auth/post-auth.component';

const routes: Routes = [
  {
    path: 'post-list',
    component: PostListComponent,
  },
  {
    path: 'auth',
    component: PostAuthComponent,
  },
  {
    path: 'post-add',
    component: PostEditComponent,
  },
  {
    path: '',
    redirectTo: '/post-list',
    pathMatch: 'full'
  },
  {
    path: 'post-edit/:index',
    component: PostEditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    PostEditComponent,
    PostAuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
