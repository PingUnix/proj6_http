import {Component, OnInit,
      trigger,
      state,
      style,
      transition,
      animate,
      keyframes,
      group   } from '@angular/core';
import {BoldHoverDirective} from './bold-hover.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styleUrls: ["./home.component.css", "./../test.css"],
 
  animations: [
    trigger('lightOnOff', [
      state('off',style({backgroundColor: 'yellow'})), 
      state('on', style({backgroundColr: 'grey'})),   
      transition('off => on', 
        group(
         [animate('4000ms eas-out', style({transform: 'rotate(90deg)'})),
          animate('2000ms east-in ', style({width: '50px'}))
         ])
      ),
      transition('on => off', 
        animate('2000ms 1s ', style({transform: 'rotate(-90deg)'}))
      )
    ]),
    trigger('heightTrigger',[
      state('noHeight',style({
        'border': '1px solid yellow',
        'background-color': 'purple',
        height :0
      })),
      state('fullHeight', style({
        'border': '2px solid purple',
        'background-color': 'yellow',
        'margin':'20px',
        height:'*'
      })),
      transition('noHeight => fullHeight', animate('2s ease-in'))
    ]),
    trigger('flyInOut',[
      transition(':enter',[
        style({transform:'translateX(-100%)',backgroundColor:'red'}), 
        animate('1s', keyframes([
          style({opacity:0, transform:'translateX(-100%)', offset:0}),
          style({opacity:1, transform:'translateX(15px)', offset:0.3}),
          style({opacity:1, transform:'translateX(0)', offset:1.0})
          ])
        )
      ]),
      transition(':leave', [
        animate('1s', keyframes([
          style({opacity:0, transform:'translateY(-100px)', offset:0}),
          style({opacity:1, transform:'translateX(25px)', offset:0.3}),
          style({opacity:1, transform:'translateX(0)', offset:1.0})
        ]))
    ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  animationClass = 'room';
  
  constructor() { }
  heightState = "fullHeight";
   
  roomState:string = "on";
  showDiv = true;
  ngOnInit() {
  }
  toggleLights(){

    this.roomState = (this.roomState === "off")?
      "on":"off";

    console.log("room state is : " + this.roomState);
  }
   toggleHeight(){

    this.heightState = (this.heightState === "noHeight")?
      "fullHeight":"noHeight";

    console.log("heightState state is : " + this.heightState);
  }
  animationStarted(event:any){
    console.log("animation started ");
    console.log(event.fromState + "=>" + event.toState);
    console.log(event.totalTime);
  }
  animationDone(event:any){
    //console.log("animation done ");
    console.log(event.fromState + "=>" + event.toState);
    console.log(event.totalTime);
  }
  ToggleDiv(){
     this.showDiv = (this.showDiv === true)?
      false:true;
  }
}
