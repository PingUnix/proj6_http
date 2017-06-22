import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})
export class T1Component implements OnInit {

 @Input() test: any;
  @Input() str: any;
  constructor() { }

  ngOnInit() {
     console.log('This if the value for user-id: ' + this.test);
  }

}
