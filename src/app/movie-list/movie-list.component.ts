import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  genres: any[];
  constructor(private movieService: MovieService) {}

  doSearch(genre: string = "Horror") {
    this.movieService.getMovies(genre).subscribe(data => {
      console.log(data);

      this.genres = data.genres;
    });
  }


  
  ngOnInit() {
    this.doSearch();
  }
}
