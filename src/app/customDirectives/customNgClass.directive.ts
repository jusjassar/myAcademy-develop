import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[myng-Class]'
})
export class MyNgClassDirective {

    constructor(private element:ElementRef,private renderer:Renderer2){}

    @Input() set classChoice(value:Object){
        console.log(value)
    }

}