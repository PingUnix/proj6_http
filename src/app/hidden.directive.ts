import { Directive,Input, ElementRef, Renderer ,OnInit} from '@angular/core';

@Directive({
  selector: '[myHidden]'
})
export class HiddenDirective implements OnInit{
    @Input() inputColor: string;



  /*constructor(private elem:ElementRef, private renderer: Renderer) {
    //let shadowStr =  this.appShadowX + this.appShadowY + this.appShadowBlur + this.appShadow;
    console.log(this.inputColor);
    
    renderer.setElementStyle(elem.nativeElement, 'color', this.inputColor);
      /*renderer.setElementStyle(elem.nativeElement, 'border', 
    '2px solid red');
     renderer.setElementStyle(elem.nativeElement, 'color', 
    'yellow');
    
  }*/
  constructor(private elem:ElementRef, private renderer: Renderer) {
      // elRef.nativeElement.style.color = '#00cc66';
       console.log( this.inputColor.toString());
      
       //this.inputColor = "blue";
       renderer.setElementStyle(elem.nativeElement, 'backgroundColor', this.inputColor);
    }
  
   ngOnInit() {
      
    }


}
