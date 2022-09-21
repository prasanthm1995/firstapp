import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit ,OnChanges{

 

data2child={
  isActive:true,

title:'The Indian Economy',

laptop:{
  model:'Lenova',
  size:'14inch',
  screen:'Touch Screen',
  Color:'Grey',
  processor:'Intel Evo'
}
}

 users:User[]=[]
 
  showForm=false;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users=this.userService.getUsers()
  }
  ngOnChanges(changes: SimpleChanges): void {
     
  }
  addUser(user:User){
    console.log(user)
    this.users.push(user)
    this.showForm= !this.showForm
  }

}
