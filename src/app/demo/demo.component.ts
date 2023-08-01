
import { Component,HostBinding,Input, OnInit } from "@angular/core";

@Component({
    selector:'app-demo',
    templateUrl:'./demo.component.html',
    styleUrls:['./demo.component.css']

})
export class DemoComponent implements OnInit {
@Input() title:string='';
@Input() btn:string='';
@Input() titleColorFromParent:string='';
@Input() bgclr:string='';
selector:string='Demo Component';
@Input() btnTxtClr:string='';

ngOnInit(){
    // the HostBinding did not work with background color so I had to do the workaround
    this.bgclr="background-color:"+this.bgclr;
}
}

