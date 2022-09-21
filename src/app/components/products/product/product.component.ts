import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() singleproduct:any={}
  productsolo:any=[]
  customClasses={}
  currentStyles={}
  Showextended=false;
  productID:any;
  promoted=true;
  active=true
  constructor(private prodSvc:ProductService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    //accessing path params using params property
     this.route.params.subscribe(data=>{
       console.log(data['id']);
       this.productID=data['id'];
      })

//accessing path params using paramMap
    this.route.paramMap.subscribe(params=>{
      console.log(params.get('id'))
     })
     
     this.prodSvc.getProductById(this.productID).subscribe(product=>{
      this.productsolo=product as Product
        console.log(this.productsolo)
     })

     //accessing path params using snapshot
     //this.productid=this.route.snapshot.paramMap.get('id)
     
     //accessing query params using queryParams
     //this.route.queryParams.subscribe(params=>{
     //   console.log(params['prop'])
     //})

      //accessing query params using queryParamMap
    // this.route.queryParamMap.subscribe(queryParams=>{
       // console.log(queryParams.get('prop'))
    // })


    this.setCustomClasses()
    this.setCurrentStyle()
  }
  setShowExtended(){
    this.Showextended= !this.Showextended
   
    this.setCurrentStyle()
    console.log(this.Showextended)
   }

   setCurrentStyle(){
    console.log(this.Showextended)
    this.currentStyles={
      'padding-top':this.Showextended ? '0':'60px',
      'color':this.Showextended?'red':'blue',
      'cursor':'pointer',
      'image':this.Showextended?'fa solid fa-plus':'fa solid fa-minus'
      
    }
   }

   setCustomClasses(){
    this.customClasses={
     // "bg-light":this.promoted,
     
     "border-success":this.Showextended,
     "border-2":this.Showextended,
     "bg-secondary":this.Showextended,
     'cursor':'pointer'
    }
  }
}

