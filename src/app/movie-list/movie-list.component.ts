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

  hideModal: boolean = true;
  index: number;
  genres: any[];
  favoriteIcon: string = "favorite_border";
  favoriteStatus: boolean = false;
  constructor(private movieService: MovieService) {}

  setIndex(index: number): void {
    this.index = index;
  }

  resetIndex(index: number): void {
    this.index = null;
  }

  toggleFavorite(index: number, movie: any): void {
    this.favoriteStatus = !this.favoriteStatus;
    if (this.favoriteStatus === false) {
      this.favoriteIcon = "favorite_border";
    } else {
      this.favoriteIcon = "favorite";
    }
    this.movieService.addToFavorites(movie);
    
  }

  ngOnInit() {}
}
