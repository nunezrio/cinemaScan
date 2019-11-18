import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "93c9ed9dab77ec1401c7c2eb7d677829"

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getGenres(): Observable<any> {
    return this.http.get(
      "https://api.themoviedb.org/3/genre/movie/list?", {
        params: {
          api_key: API_KEY,
          language: "en-US"
        }
      }
    );
  }

  getMovies(): Observable<any> {
    return this.http.get(
      "https://api.themoviedb.org/3/discover/movie?", {
      params: {
        api_key: API_KEY,
        language: "en-US",
        certification_country: "US",
        certification: "",
        primary_release_year: undefined,
        with_genres: undefined
      }
    }
    );
  }
}
