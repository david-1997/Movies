import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieData;
  constructor(private movieService:MovieService) { 
    this.movieService.getMovies().subscribe((data) => {
      this.movieData=data;
    })
   }

  ngOnInit(): void {
  }

}
