import { Component, OnInit } from '@angular/core';
import { HiddenDirective} from './hidden.directive';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
