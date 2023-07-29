import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[myBorder]'
})
export class myBorderDirective implements OnInit {

    constructor(private element:ElementRef,private renderer:Renderer2){}

    @Input() myClasses:Object={};
    @Input() borderFromParent:string='';

    @HostBinding('style.border') borderselect:string=this.borderFromParent

    ngOnInit(){
        // console.log(this.myClasses)
        let entries = Object.entries(this.myClasses)
    //    console.log(entries)
       for ( let [classNAme,condition] of entries){
        console.log(classNAme,condition)
        if(condition){
            this.renderer.addClass(this.element.nativeElement,classNAme)
        }
       }
    }

}