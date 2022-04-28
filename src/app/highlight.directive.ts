import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // directive gives common functionality to the html elements 

  // so we need the element to implement the functionality
  constructor(private elem : ElementRef) { 
    console.log("Eleemnt we got " , this.elem.nativeElement)
    this.elem.nativeElement.style.color="yellow"
  }

}
