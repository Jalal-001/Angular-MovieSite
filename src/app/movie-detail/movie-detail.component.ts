import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'appMovieDetail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:any; //@Input() -melumatin xaricden geleceyini bildirir.'movie.service.ts'-den melumati aldigi ucun .
  
  constructor(
    private movieService:MovieService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }
  getMovie():void{
    const id:any= this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieID(id).subscribe(movie=>this.movie=movie);
  }
  Save():void{
    this.movieService.update(this.movie).subscribe(()=>{
      this.location.back();
    })
  }
}
