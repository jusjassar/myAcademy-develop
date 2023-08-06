import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { users } from '../services/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  constructor(private Userservice:UserService,){
   
  }
  user:users={name:'text',status:'none'}
  ngOnInit():void{
    // this.Userservice.sendDetails.subscribe((data:users)=>{
    //   console.log("hello")
    //   this.user=data;
    // })
    this.myObservable.subscribe(val=>{
      console.log(val)
    },(error)=>{
      alert(error.message)
    },()=>{
      alert("Observable has completed")
    })
  }
  errorCondition:boolean=true;
  myObservable=new Observable((observer)=>{
    console.log("Observable Starts")
    setTimeout(()=>{observer.next("1")},3000);
    setTimeout(()=>{observer.next("5")},4000);
    setTimeout(()=>{observer.next("2")},5000);
    setTimeout(()=>{observer.next("3")},6000);
    setTimeout(()=>{observer.next("4")},7000);
    if(this.errorCondition){
      setTimeout(()=>{observer.error(new Error("something went wront"))},6000);
    }
    setTimeout(()=>{observer.complete()},8000)
  })
}
