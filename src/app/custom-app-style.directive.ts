import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[styleAttr]'
})
export class CustomAppStyleDirective  {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input() set styleAttr(val:Object){
      console.log(val)
      let entries = Object.entries(val)
      for( let [stylProp,val] of entries){
        this.renderer.setStyle(this.element.nativeElement,stylProp,val)
      }
  }
  
  // ngOnInit(){
  //     let styleVals = Object.entries(this.styleAttr)
  //     for( let [prop,val] of styleVals){
  //       console.log(styleVals)
  //       this.renderer.setStyle(this.element.nativeElement,prop,val)
  //     }
  // }
}
