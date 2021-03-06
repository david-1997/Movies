import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }
  postMovie(data): Observable<any> {
    return this.http.post('https://movies-nodejs.herokuapp.com/create', data)
  }
  getMovies(): Observable<any> {
    return this.http.get('https://movies-nodejs.herokuapp.com/movies')
  }
  getCategory(name): Observable<any> {
    return this.http.get('https://movies-nodejs.herokuapp.com/category/'+name)
  }
  updateMovie(data): Observable<any> {
    return this.http.put('https://movies-nodejs.herokuapp.com/update',data)
  }
  deleteMovie(data): Observable<any> {
    return this.http.delete('https://movies-nodejs.herokuapp.com/delete/'+data._id)
  }
}
