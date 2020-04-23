import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id:String;
  private sub: any;
  movieData;
  constructor(private movieService:MovieService,private route: ActivatedRoute,private router: Router) { 
    this.movieService.getMovies().subscribe((data) => {
      this.movieData=data;
      console.log(this.movieData)
    })
   }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']
      });
      console.log(this.id);
  }

}
