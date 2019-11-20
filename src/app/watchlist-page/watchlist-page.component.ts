import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";

@Component({
  selector: "app-watchlist-page",
  templateUrl: "./watchlist-page.component.html",
  styleUrls: ["./watchlist-page.component.css"]
})
export class WatchlistPageComponent implements OnInit {
  favorites: any[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.favorites = this.movieService.getFavorites();
  }
}
