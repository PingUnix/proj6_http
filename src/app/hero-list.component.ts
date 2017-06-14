import { OnInit ,Input} from '@angular/core';
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
  @Input() filterName = '';
  filter = "ice";
  //constructor (private dataService: DataService) {}
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
    console.log("ts file: filter name is :  "  + this.filterName);
    this.hs.getHeroes(this.filterName).subscribe(
      heroes => {
        this.heroes = heroes;
        for(let p of heroes)
        console.log("operator ; " + p.id );
      },
      err => this.errorMessage = err
    );
  } 
  
  
}