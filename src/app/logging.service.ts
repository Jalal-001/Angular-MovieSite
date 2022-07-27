import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  messages:string[]=[];

  add(message:string):void{
    this.messages.push(message);
  }
  delete():void{
    this.messages=[];
  }
}
