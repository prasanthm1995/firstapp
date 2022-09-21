import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  customClasses={}
  customStyle={}
  currentStyles={}
 // products:any[]=[];
  products:Product[]=[]
  showForm=false;
  promoted=true
  active=true
  Showextended=true;
  // products=[
  //   {
  //   "id":1,
  //   "title":"Cotton Shirt",
  //   "price":200,
  //   "image":"https://picsum.photos/200",
  //   "rating":{
  //     "rate":4.5,
  //     "count":250
  //   },
  //   "promotion":true,
  //   "promotionDate":new Date("07/09/2022")
  //   },
  //   {
  //     "id":2,
  //     "title":"Pants",
  //     "price":2,
  //     "image":"https://picsum.photos/200",
  //     "rating":{
  //       "rate":4.5,
  //       "count":250
  //     },
  //     "promotion":false
  //   },
  //     {
  //       "id":3,
  //       "title":"Jeans",
  //       "price":200,
  //       "image":"https://picsum.photos/200",
  //       "rating":{
  //         "rate":4.5,
  //         "count":250
  //       },
  //       "promotion":true
  //     },
  //       {
  //         "id":4,
  //         "title":"T-shirt",
  //         "price":5,
  //         "image":"https://picsum.photos/200",
  //         "rating":{
  //           "rate":4.5,
  //           "count":250
  //         },
  //         "promotion":false
  //       }
  //   ]
 // [routerLink]="['/product',product.id]" [queryParams]="{prop:'xxx'}"
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products=this.productService.getProducts()
    this.setCustomClasses()
  }

  
  setCustomClasses(){
     this.customClasses={
      // "bg-light":this.promoted,
      "myBackground":this.promoted ?'green':'red',
      "border-success":this.active
     }

    }
    setCustomStyle(){
      this.customStyle={
        "background":this.promoted?'green':'red',
      }

     }

     visibleDetails(){
      this.Showextended= true
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
        'color':this.Showextended?'red':'blue'
      }
     }
      
    addProduct(products:Product){
      console.log(products)
      this.products.push(products)
      this.showForm= !this.showForm
    }

}
