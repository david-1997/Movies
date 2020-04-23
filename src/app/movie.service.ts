import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }
  postMovie(data): Observable<any> {
    return this.http.post('http://localhost:3000/create', data)
  }
  getMovies(): Observable<any> {
    return this.http.get('http://localhost:3000/movies')
  }
  getCategory(name): Observable<any> {
    return this.http.get('http://localhost:3000/category/'+name)
  }
  updateMovie(data): Observable<any> {
    return this.http.put('http://localhost:3000/update',data)
  }
  deleteMovie(data): Observable<any> {
    return this.http.delete('http://localhost:3000/delete/'+data._id)
  }
}
