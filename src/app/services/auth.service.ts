import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
 
import { User } from '../components/users/User';
import { Observable, Subscriber } from 'rxjs';
import { signinData } from '../components/auth/signinData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users:User[]=[];
  private readonly mockedUser =new signinData('prasanth@gmail.com','test123');
  isAuthenticated=false;

  loginObj:any={
    email:'',
    pwd:''
  }

  constructor(private http:HttpClient,private router:Router) { }
  authenticate(SigninData:signinData): boolean{
    if(this.checkCredentials(SigninData)){
      this.isAuthenticated=true;
      this.router.navigate(['products']);
      return true;
    }
    this.isAuthenticated=false;
    return false;
  }
  
  private checkCredentials(SigninData:signinData) : boolean{
     return this.checkEmail(SigninData.getEmail())&&this.checkPassword(SigninData.getPassword());
  }

  private checkEmail(email:string):boolean{
        return email===this.mockedUser.getEmail();
  }
  private checkPassword(password:string):boolean{
     return password===this.mockedUser.getPassword();

  }
  
  getUsers(){
    this.http.get("http://localhost:3000/users").subscribe(users=>{
        const user= users as User[]
        console.log(user)
      })
  }
  login(email:string,pwd:string){
    return new Observable(Subscriber=>{
      
     this.http.get("http://localhost:3000/users").subscribe(users=>{
        this.users= users as User[];
        const user=this.users.find(user=>user.email ==email && user.password == pwd)
       console.log(user)
       if(user != undefined){
         Subscriber.next(user)
       }else{
         Subscriber.next('User Not Found')
       }
     })
    })
    
 }
 logout(){
  this.isAuthenticated=false;
  this.router.navigate(['']);
 }
}
