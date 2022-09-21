 import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import{FlashMessagesService} from 'flash-messages-angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 // public loginForm !:FormGroup
  constructor(private fb:FormBuilder,
    private router:Router,
    private flashmsgSvc:FlashMessagesService
    ) { }

  ngOnInit(): void {
   // this.loginForm=this.fb.group({
   //   email:[''],
   ////   password:['']
   // })
  }
  onSubmit(form:any){

  }
}
