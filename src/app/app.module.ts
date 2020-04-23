import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CreateComponent } from './create/create.component';
import { FooterComponent } from './footer/footer.component';
import { ImageComponent } from './image/image.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieCategoryComponent } from './movie-category/movie-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CreateComponent,
    FooterComponent,
    ImageComponent,
    NavComponent,
    HomeComponent,
    MovieComponent,
    MoviesComponent,
    UpdateComponent,
    DeleteComponent,
    MovieCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
