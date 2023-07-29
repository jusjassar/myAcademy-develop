import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myBorder]'
})
export class HostBindingDirective implements OnInit {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

@HostBinding('sytle.border') myBorder=''
@Input() borderFromParent:string='';

ngOnInit(){
  this.myBorder = this.borderFromParent
  this.renderer.setStyle(this.element.nativeElement,'border',this.myBorder)
  console.log(this.myBorder)
}

}
