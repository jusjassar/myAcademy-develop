import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  title = 'myAcademy-develop';
  constructor(private service:UserService){}
  users=this.service.users
  adduser(Uname:string,Ustatus:string){
    this.service.users.push({name:Uname,status:Ustatus})
  }
}
