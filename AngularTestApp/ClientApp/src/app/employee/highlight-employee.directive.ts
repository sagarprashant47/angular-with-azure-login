import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { removeListener } from 'cluster';

@Directive({
  selector: '[appHighlightEmployee]'
})
export class HighlightEmployeeDirective {

  @Input() appHighlightEmployee: string;

  @HostListener('mouseenter') MouseEnter(eventObj: any) {
    this.highlight('red');
  }

  @HostListener('mouseleave') MouseLeave(eventObj: any) {
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
