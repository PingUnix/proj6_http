import { Injectable,Input }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'; // for exception handling
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import 'rxjs/add/observable/throw';
import { Hero } from './hero';
 
@Injectable()
export class HeroService {
  private heroesUrl = './../public/heroes.json';  // URL to web API
  ids:string = "fire";
  constructor (private _http: Http) {} 
  //http client service is injected to HeroService Constructor
  
  
  //get data via http
  getHeroes(fil:string){
    console.log("service fiel : " + fil);
    
    return this._http.get(this.heroesUrl)
      .map((rep:Response) => rep = rep.json()) 
      
      //.filter(project => (<Hero>project).magic === fil) 

      .catch(this._errHandler); 
    
  }
  _errHandler(err:Response){
    console.error(err);
    return Observable.throw(err||" server error");
  }
  //error handling function 



}
