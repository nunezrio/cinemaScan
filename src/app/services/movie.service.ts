import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getMovies(genre: string): Observable<any> {
    return this.http.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=93c9ed9dab77ec1401c7c2eb7d677829&language=en-US"
    );
  }
}
