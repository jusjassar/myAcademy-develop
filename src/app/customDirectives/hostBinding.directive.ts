import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[titleColor]'
})
export class TitleColorDirective implements OnInit {
    constructor(private element:ElementRef,private renderer:Renderer2){}
@Input() titleColorFromParent:string=''
@HostBinding('style.color') myTitleColor:string=''
@Input() btnTxtClrFromParent:string='';
@HostBinding('style.color') mybtnTxtClr:string='';

ngOnInit(): void {
    this.myTitleColor=this.titleColorFromParent;
    this.mybtnTxtClr=this.btnTxtClrFromParent
}
}