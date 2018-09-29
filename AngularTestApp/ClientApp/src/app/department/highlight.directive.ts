import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private el: ElementRef) { }

  private highlight(color: string) {
    if (color === null) {
      this.el.nativeElement.style.backgroundColor = 'white';
    } else {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }

}
