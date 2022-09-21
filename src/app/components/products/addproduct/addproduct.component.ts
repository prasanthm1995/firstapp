import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import{ FormBuilder, FormControl,FormGroup, Validators,FormArrayName} from '@angular/forms'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  myproduct:Product={
    id: 0,
    title:'',
    price: 0,
    description:'',
    category:'',
    image:'',
    rating:{
    rate:0,
    count:0
    },
    promotion:false
  }
    name=new FormControl('')
//creating form using FormGroup and FormControl classes
     // productForm=new FormGroup({
      //id:new FormControl(''),
     // title:new FormControl('',Validators.required),
     // description:new FormControl(''),
     // price:new FormControl(''),
     // rating:new FormGroup({
     //   rate:new FormControl(''),
    //    count:new FormControl('')
      //})
     
   // })

   //creating form using formbuilder service
   productForm =this.fb.group({
    id:new FormControl(''),
    title:new FormControl('',[Validators.required]),
    description:new FormControl(''),
    price:new FormControl(''),
    rating:this.fb.group({
      rate:new FormControl(''),
      count:new FormControl('')
    }),
    others:this.fb.array([
      this.fb.control('')
    ])

   })
   dataarray=[];
   rate:number=0;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.dataarray.push();
    this.name.setValue('Awesome')
  }

  submitHandler(){
    console.log(this.productForm.value)
     
  }
  addOthers(){
     this.productForm
  }

}
