import { Directive, ElementRef, HostListener, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {
  @Input() dirRef: any;
  @Input() textColor: string;
  @HostListener('mouseenter') highLight(): any {
    this.elementRef.nativeElement.style.background = this.textColor;
    console.log(this.dirRef);
    this.viewContainerRef.createEmbeddedView(this.dirRef);
  }

  @HostListener('mouseleave') unHighLight(): any {
    this.elementRef.nativeElement.style.background = '#2e6da4';
    this.viewContainerRef.clear();
  }

  constructor(private elementRef: ElementRef, private viewContainerRef: ViewContainerRef) {}
}
