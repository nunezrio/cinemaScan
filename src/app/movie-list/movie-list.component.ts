import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "../services/movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  @Input()
  displayMovies: [];

  genres: any[];
  constructor(private movieService: MovieService) {}

  ngOnInit() {}
}
