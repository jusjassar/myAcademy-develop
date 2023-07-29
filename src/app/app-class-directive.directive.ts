import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
@Directive({
  selector: '[app-class-Directive]'
})
export class AppClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set customNgClass(value: Object) {
    // console.log(value)
    let entries = Object.entries(value)
    // console.log(entries[1])
    for (let [className,Condition] of entries) {
      console.log(className,Condition)
      if (Condition) {
        this.renderer.addClass(this.element.nativeElement, className)
      }
    }

  }

}
