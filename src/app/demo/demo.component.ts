import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  

  @Input() colorFromParent:string='';
  @Input() title:string='Title';
  @Input() btn:string='Button';
  @Input() bgclr:string='';

  @HostBinding('style.color') mycolor='';
  @HostBinding('style.backgroundcolor') myBgClr=''
  ngOnInit(){
    this.mycolor = this.colorFromParent;
    this.myBgClr = "background-color:"+this.bgclr;
    console.log(this.myBgClr)
  }
}
