// Exercise 03 — HighlightDirective (Custom Attribute Directive)
// Step 33: Yellow background on mouseenter, removed on mouseleave
// Step 37: @Input makes the colour configurable from the template

import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  // Step 37: Configurable colour — caller can override: <div appHighlight="lightblue">
  @Input() appHighlight = 'rgba(254, 240, 138, 0.5)'; // default: yellow

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // @HostListener binds to host element events without manual addEventListener
  // Angular handles cleanup automatically when the component/directive is destroyed
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appHighlight);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.2s');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
