import { OnInit } from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './mock-heroes';

import { Component } from '@angular/core';
import {DataService } from  './data.service';
import {HeroService } from  './hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
   providers: [DataService,HeroService]
})

export class HeroListComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  mode = 'Observable';
 
 // constructor (private dataService: DataService) {}
  constructor(private hs:HeroService){}
  ngOnInit() { 

    /*this.dataService.fetchData().subscribe(
        (data) => this.heroes = data
      );
    */
    this.getHeroes();
  }
 
  getHeroes() {
    //this.heroService.getHeroes().subscribe(
    //                   heroes => this.heroes = heroes,
    //                   error =>  this.errorMessage = <any>error);
    //this.heroes = HEROES;
    this.hs.getHeroes().subscribe(
      ( heroes) => {this.heroes = heroes; 
          for( let p of heroes){console.log("heroes length is : " + p.id);
          }  
      }
    )
}
 
  
}