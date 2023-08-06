import { Component, EventEmitter, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
import { users } from '../services/user.model';
import { ObservableService } from '../services/Observable.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[UserService,ObservableService]
})
export class UserListComponent implements OnInit{
  constructor(private service:UserService,private obSrv:ObservableService){}
  users=this.service.users
 adduser(Uname:string,Ustatus:string){
  
    this.service.users.push({name:Uname,status:Ustatus})
 }
 detailsMethod(user:users){
  this.service.pipeDetails(user)
  console.log(user)
 }
ngOnInit(){
  this.obSrv.Ob2.subscribe(val=>{
    // console.log(val)
  })
  this.obSrv.Ob3.subscribe(data=>{
    console.log(data)
  })
}
}
