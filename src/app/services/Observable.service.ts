import { Injectable, OnInit } from "@angular/core";
import { Observable, from, of } from "rxjs";

@Injectable()
export class ObservableService  {

        // creating observable with constructor
    Ob1=new Observable(observer=>{
        setTimeout(()=>{observer.next("1")},1000);
        setTimeout(()=>{observer.next("2"),2000})
    });

   array1=[1,2,3,4,56,67]
   array2=[44,55,22,66,77]

   Ob2=of(this.array1,this.array2)
   array3=[...this.array1,...this.array2]
   Ob3=from(this.array3)
}