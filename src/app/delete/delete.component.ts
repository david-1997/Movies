import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  basicForm;
  userForm; 
  movieData;
  selectedMovie:any;
  constructor(private movieService:MovieService,private router:Router) {
    this.movieService.getMovies().subscribe((data) => {
      this.movieData=data;
    })
    this.basicForm = new FormGroup({
      'select': new FormControl("", Validators.required),
      })
   }
   check()
   {}
   delete() {
    this.movieService.deleteMovie(this.selectedMovie).subscribe((movie) => {
      console.log(this.selectedMovie._id);
      this.router.navigate(['/']);
    })
  }
  ngOnInit(): void {
  }

}
