import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 
import { Hero } from './hero';
 
@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web API
 
  constructor (private http: Http) {} 
  //http client service is injected to HeroService Constructor
  create(name:string):Observable<Hero>{
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    //a new instance of requstOptions

    return this.http.post(this.heroesUrl, {name},options)
      .map(this.extractData)
      .catch(this.handleError);

}
  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);

                    //pass the heroes url to get and it calls the 
                    //server which returns heroes. 
                    //http.get return an observable of http response 
                    //observable<Response> from the RxJs lib and map()
                    //is the RxJS operators.

  }
  /*helper extractData*/
  //to map the http.get repsonse object to heroes
  private extractData(res: Response) {
    let body = res.json();
    //res, response object doesn't hold the data in a form the app 
    //can use. must parse the response data into JSON object.

    return body.data || { };
  }
 
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
