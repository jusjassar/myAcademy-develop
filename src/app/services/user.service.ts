import {EventEmitter } from '@angular/core'
import { users } from './user.model';
export class UserService {

    users=[
        {name:'jhon',status:'active'},
        {name:'Mark',status:'inactive'},
        {name:'Steve',status:'active'},
        {name:'Tim',status:'inactive'}
    ]
    sendDetails:EventEmitter<users> = new EventEmitter();
    pipeDetails(users:users){
        console.log(users)
        this.sendDetails.emit(users)
    }
}