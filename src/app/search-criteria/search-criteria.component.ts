import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  genres: any[];
  constructor(private movieService: MovieService) {}

  searchGenre() {
    this.movieService.getGenres().subscribe(data => {
      this.genres = data.genres;
      console.log();
    });
  }

  ngOnInit() {
    this.searchGenre()
  }
}
