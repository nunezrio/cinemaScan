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
