import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[styleAttr]'
})
export class CustomAppStyleDirective implements OnInit {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @Input() styleAttr:Object={}
  
  ngOnInit(){
      let styleVals = Object.entries(this.styleAttr)
      for( let [prop,val] of styleVals){
        console.log(styleVals)
        this.renderer.setStyle(this.element.nativeElement,prop,val)
      }
  }
}
