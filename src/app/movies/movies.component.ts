import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
    selector: 'movies', //<movies></movies>-html-de cagrilan hisse
    templateUrl:'movies.component.html',
    styleUrls:['./movies.component.css']
})
export class MoviesComponent{
    title='Movies List';
    movies:any;
   
    ngOnInit(): void {
        this.callMovies();
    }
    // dependency injection ('movieService:MovieService'-class-in obyektinin alinmasi)
    constructor(
        private movieService:MovieService,
        ){}
    
    callMovies():void{
        //getMovies-den gelen deyer ötürülür 'movies'-e
        this.movieService.getMovies()
        .subscribe(movies=>this.movies=movies);
    }

    Add(name:string,imgUrl:string,description:string):void{
        this.movieService.add({
            name,imgUrl,description
        }as Movie).subscribe(movie=>this.movies.push(movie));
    }

    Delete(movie:Movie):void{
        this.movies=this.movies.filter((m: Movie) => m !==movie);
        this.movieService.delete(movie).subscribe();
    }
}