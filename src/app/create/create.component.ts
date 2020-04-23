import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MovieService } from '../movie.service';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userForm;
  constructor(private movieService: MovieService,private router:Router) {
    this.userForm = new FormGroup({
      'name': new FormControl("", Validators.required),
      'category': new FormControl("", Validators.required),
      'rating': new FormControl("", [Validators.required, Validators.min(0), Validators.max(10)]),
      'image': new FormControl("", Validators.required),
      'description': new FormControl("", Validators.required)
    })
  }
  ngOnInit(): void {
  }

  sendData() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.movieService.postMovie(this.userForm.value).subscribe((movieData) => {
        console.log("Done")
        this.router.navigate(['/']);
      })
    }
    else {
      console.log(this.userForm.value)
    }
  }
}
