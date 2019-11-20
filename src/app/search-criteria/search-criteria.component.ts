import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  genres: any[];
  movies: any[];
  constructor(private movieService: MovieService) {}

  searchGenre() {
    this.movieService.getGenres().subscribe(data => {
      this.genres = data.genres;
    });
  }

  submitSearchForm(form: NgForm) {
    let year = form.value.yearInput;
    let genre = form.value.genre;
    let certification = form.value.certification;
    console.log(form.value);
    this.movieService.getMovies(year, certification, genre).subscribe(data => {
      this.movies = data.results;
      console.log(data.results);
    });
    form.reset();
  }

  ngOnInit() {
    this.searchGenre();
  }
}
