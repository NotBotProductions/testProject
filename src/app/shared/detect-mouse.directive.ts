import { Directive, HostListener, HostBinding, Host, ElementRef } from '@angular/core';
import { BackgroundDirective } from './background.directive';

@Directive({
  selector: '[appDetectMouse]'
})
export class DetectMouseDirective {
  height: number = 0;
  @HostBinding('style.backgroundColor') bgc: string = "transparent";

  constructor(@Host() private bgDir: BackgroundDirective, private elementRef: ElementRef ) { }

  //@HostListener('window:resize') enter () {
  //  this.height = this.elementRef.nativeElement.offsetHeight;
  //}

  @HostListener('mouseenter') enter () {
    this.bgDir.setBackgroundColor(true);
  }

  @HostListener('mouseleave') leave () {
    this.bgDir.setBackgroundColor(false);
  }  

}
