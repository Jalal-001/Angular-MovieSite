import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb(){
  const movies=[
    {id:1,name:"Movie 1",description:"something",imgUrl:"1.jpg"},
    {id:2,name:"Movie 2",description:"something",imgUrl:"2.jpg"},
    {id:3,name:"Movie 3",description:"something",imgUrl:"3.jpg"},
    {id:4,name:"Movie 4",description:"something",imgUrl:"4.jpg"},
    {id:5,name:"Movie 5",description:"something",imgUrl:"5.jpg"},
    {id:6,name:"Movie 6",description:"something",imgUrl:"6.jpg"},
    {id:7,name:"Movie 7",description:"something",imgUrl:"7.jpg"},
    {id:8,name:"Movie 8",description:"something",imgUrl:"8.jpg"}
];
return {movies};
}
  constructor() { }
}
