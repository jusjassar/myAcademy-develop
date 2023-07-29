import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-class-Directive]'
})
export class AppClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set customNgClass(value: Object) {
    console.log(value)
    let entries = Object.entries(value)
    console.log(entries[1])
    for (let entry of entries) {
      if (entries[1]) {
        this.renderer.addClass(this.element.nativeElement, entry[0])
      }
    }

  }

}
