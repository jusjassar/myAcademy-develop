
import { Component,HostBinding,Input, OnInit } from "@angular/core";

@Component({
    selector:'app-demo',
    templateUrl:'./demo.component.html',
    styleUrls:['./demo.component.css']

})
export class DemoComponent implements OnInit {
@Input() title:string='';
@Input() btn:string='';
@Input() colorFromParent:string='';
@Input() bgclr:string='';


// @HostBinding('style.background-color') myBgClr:string='blue'
@HostBinding('style.color') mycolor:string=''
ngOnInit(){
    // the HostBinding did not work with background color so I had to do the workaround
    this.bgclr="background-color:"+this.bgclr;
    this.mycolor=this.colorFromParent
}
}

