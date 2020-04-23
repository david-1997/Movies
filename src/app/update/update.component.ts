import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  movieData;
  userForm;
  basicForm;
  constructor(private movieService:MovieService,private router:Router) { 
    this.movieService.getMovies().subscribe((data) => {
      this.movieData=data;
    })
    this.basicForm = new FormGroup({
      'select': new FormControl("", Validators.required),
      })
    this.userForm = new FormGroup({
      '_id': new FormControl("", Validators.required),
      'name': new FormControl("", Validators.required),
      'category': new FormControl("", Validators.required),
      'rating': new FormControl("", [Validators.required, Validators.min(0), Validators.max(10)]),
      'image': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
  }
  selectedMovie:any;
  fill()
  {
    this.userForm.setValue(this.selectedMovie);
  }
  update()
  {
    this.movieService.updateMovie(this.userForm.value).subscribe((movie) => {
      this.router.navigate(['/']);
    })
  }
}
