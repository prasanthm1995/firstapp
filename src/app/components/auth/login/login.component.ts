import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
 import { FormBuilder,FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { signinData } from '../signinData';
 
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !:FormGroup
   
  constructor(private fb:FormBuilder) { }
   
   
  ngOnInit(): void {

    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    })
     //this.users=this.authSvc.getUsers()
    //console.log(this.users)
  }

  onSubmit(signInForm:NgForm){
    console.log(signInForm.value)
    const SigninData=new signinData(signInForm.value.email,signInForm.value.password);
    console.log(SigninData);
    //this.authService.authenticate(SigninData)
  }
  // loginSubmit(form:any){
   // console.log(form.value)
   //this.authSvc.login(form.value.email,form.value.password).subscribe(user=>{
    // console.log(user)
    // if(user !='User Not Found'){
    //    console.log('Authentication Success')
   //  }else{
   //     console.log('Authentication Failed')
    // }
    //})

  //}
  //(ngSubmit)="loginSubmit(loginForm)"

  //login( ){
 //  this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
  //   const user=res.find((a:any)=>{
  //     return a.email === this.loginForm.value.email && a.password=== this.loginForm.value.password
   //   });
  //    if(user){
  //     alert("Login Success!!");
 //    }
  //    else{
  //      alert("User Not Found");
  //    }
  //  })
  //}
}
 