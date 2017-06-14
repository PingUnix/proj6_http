import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Hero } from './hero';
 
@Injectable()
export class HeroService {
  private heroesUrl = './../public/heroes.json';  // URL to web API
  
  constructor (private _http: Http) {} 
  //http client service is injected to HeroService Constructor
  
  //get data via http
  getHeroes(){
    return this._http.get(this.heroesUrl)
      .map((rep:Response) => rep = rep.json() )
      .filter((hero:Hero) => {hero.id > 11;})
      ;
  }
}
