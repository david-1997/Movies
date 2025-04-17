import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }
  postMovie(data): Observable<any> {
    return this.http.post('https://movies-server-production-9c6f.up.railway.app/create', data)
  }
  getMovies(): Observable<any> {
    return this.http.get('https://movies-server-production-9c6f.up.railway.app/movies')
  }
  getCategory(name): Observable<any> {
    return this.http.get('https://movies-server-production-9c6f.up.railway.app/category/'+name)
  }
  updateMovie(data): Observable<any> {
    return this.http.put('https://movies-server-production-9c6f.up.railway.app/update',data)
  }
  deleteMovie(data): Observable<any> {
    return this.http.delete('https://movies-server-production-9c6f.up.railway.app/delete/'+data._id)
  }
}
