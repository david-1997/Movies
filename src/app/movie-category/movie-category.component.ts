import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.css']
})
export class MovieCategoryComponent implements OnInit {
  name:String;
  private sub: any;
  movieData;
  constructor(private movieService:MovieService,private route: ActivatedRoute,private router: Router) {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']
      });
      if(this.name=="marvel")
    {
      this.name="Marvel";
    }
    else if(this.name=="dc")
    {
      this.name="DC";
    }
    if(this.name=="starwars")
    {
      this.name="Star Wars"
    }
    this.movieService.getCategory(this.name).subscribe((data) => {
      this.movieData=data;
    })
   }

  ngOnInit(): void {

    if(this.name=="marvel")
    {
      this.name="Marvel";
    }
    else if(this.name=="dc")
    {
      this.name="DC";
    }
    if(this.name=="starwars")
    {
      this.name="Star Wars"
    }
  }

}
