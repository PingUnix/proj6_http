import { Input,Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'customer-counter',
  templateUrl: './customer-counter.component.html',
  styleUrls: ['./customer-counter.component.css']
})
export class CustomerCounterComponent implements OnInit {

  counterVal = 0;
  @Input() tst:number;

  @Input()
  get counter(){
    return this.counterVal;
  }

  @Output() counterChange = new EventEmitter();

  set counter(newVal:number){
    this.counterVal = newVal;
    this.counterChange.emit(this.counterVal);
  }

  decrement():number{
    this.counterVal--;
    return this.counterVal;
  }
  increment():number{
    this.counterVal--;
    return this.counterVal;
  }
  constructor() { }

  ngOnInit() {
  }

}
