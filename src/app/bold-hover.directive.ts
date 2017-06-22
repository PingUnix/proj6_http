import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[BoldHover]',
  host:{
    '(mouseenter)':'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()'
  }
})
export class BoldHoverDirective {
  private element: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }
  /*ElementRef provides us with a way of getting a reference to the DOM element that the directive is attatched to using the nativeElement property. We're saving a reference to the element in a private variable called element. Directive is the decorator used for configuring directives, which we'll be using in the next steps. Just like with configuring components, we'll need to define a selector which will tell Angular how to identify the directive that needs to be used. We can also provide a host object for binding events from that elements to functions on our directive*/
  onMouseEnter(){
    this.element.style.fontWeight = 'bold';
    console.log("bold ... ");
  }
  onMouseLeave(){
    this.element.style.fontWeight = 'normal';
    console.log("bold ...wwqe ");
  }
}
