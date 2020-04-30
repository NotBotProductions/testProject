import { OnInit, Directive, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[backgroundC]'
})
export class BackgroundDirective implements OnInit {
    @HostBinding('style.background-color') bg: string;

    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    ngOnInit() {
        //this.elementRef.nativeElement.style.backgroundColor = "orange";
        //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "yellow");
        //this.renderer.setProperty(this.elementRef.nativeElement, "textContent", "New Value:");
        //console.log(this.elementRef);
    }

    setBackgroundColor(value: boolean) {
        if (value) {
            this.bg = "rgb(197, 237, 236)"
        } else {
            this.bg = "transparent"
        }
    }
}