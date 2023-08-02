import { Directive,ElementRef,Input,OnInit,Renderer2 } from "@angular/core";

@Directive({
    selector:'[app-highlight]'
})
export class AppHighLightDirective implements OnInit {
    constructor(private element:ElementRef, private renderer:Renderer2){}
@Input() set condition(cond:boolean){
    console.log(cond)
    if(cond){
        // console.log(cond)
        this.renderer.addClass(this.element.nativeElement,'highlight')
    }
}
ngOnInit(): void {
    
    
}

}