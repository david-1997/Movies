import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { CategoryComponent } from './category/category.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MovieComponent } from './movie/movie.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "category/:name",
    component: MovieCategoryComponent
  },
  {
    path: "movie/:id",
    component: MovieComponent
  },
  {
    path: "update",
    component: UpdateComponent
  },
  {
    path: "delete",
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
