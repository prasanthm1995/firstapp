import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  message='Learning Angular Property Binding Basics'

 
 //enabled=false;

//  dynamicBackground='bluetheme'
//   Product='Leanova Laptop'

//   Products=[{
//  name:'wired Mouse',
//  price:40,
//  brand:'HP'
//   },
//   {
//     name:'wireless Mouse',
//     price:40,
//     brand:'Leanova'

//   },
//   {
//     name:'14inch Laptop',
//     price:40,
//     brand:'HP'
//   },
// ]



  ngOnInit(): void {
  }

  // getAllUsers(){

  // }
  // getUser(id:string){

  // }

  // getResponse(){
  //   return (2*10)+1+1
  // }

  // updateProduct(){
  //   console.log('Product Updated')
  // }
  // enableButton(){
  //   this.dynamicBackground='redtheme'
  //   // this.enabled = !this.enabled

  // }

}
