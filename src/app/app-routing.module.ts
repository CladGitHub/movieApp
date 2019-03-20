import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
  { path: 'movies/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
  { path: 'whattsapp', loadChildren: './whattsapp/whattsapp.module#WhattsappPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }