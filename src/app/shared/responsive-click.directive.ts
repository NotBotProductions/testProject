import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResponsiveClick]'
})
export class ResponsiveClickDirective {
  heightOfElement: number;
  @HostBinding('style.height') height: string;
  @HostBinding('style.backgroundColor') bgc: string = "transparent";

  constructor(private elementRef: ElementRef) { }

  @HostListener('mousedown') mousedown () {
    let height: number;
    this.heightOfElement = +this.elementRef.nativeElement.offsetHeight;
    height = this.heightOfElement - (.1 * this.heightOfElement);
    this.height = height + "px";
    this.bgc = "aqua";
  }

  @HostListener('mouseup') mouseup () {
    this.height = this.heightOfElement + "px";
    this.bgc = "transparent";
  }

  @HostListener('mouseleave') mouseleave () {
    this.height = this.heightOfElement + "px";
    this.bgc = "transparent";
  }
}
