import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies:Movie[]=[];
  movieLength:number=0;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.callMovies();
  }
  callMovies():void{
    this.movieService.getMovies()
    .subscribe(movies=>{
      this.movies=movies.slice(0,6)
      this.movieLength=movies.length
    });
  }
  
}
