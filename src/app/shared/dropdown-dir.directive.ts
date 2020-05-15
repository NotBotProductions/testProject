import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdownDir]'
})
export class DropdownDirDirective {
  @HostBinding('class.open') toggleDrop: boolean = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event']) clk (event: Event) {
    this.toggleDrop = this.elementRef.nativeElement.contains(event.target) ? !this.toggleDrop : false;
  }

}
