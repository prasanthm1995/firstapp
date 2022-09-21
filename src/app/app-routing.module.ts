import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductlistComponent  } from './components/products/productlist/productlist.component';  
import { UsersComponent } from './components/users/users.component';
import { ProductGuard } from './guards/product.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'customers',component:CustomerlistComponent},
  {path:'products',component:ProductlistComponent},
  {path:'product/:id',component:ProductComponent}, 
  {path:'product/edit/:id',component:ProductComponent,canActivate:[ProductGuard]} ,
  {path:'product/view/:id',component:ProductComponent},
  {path:'users',component:UsersComponent},
  {path:'orders',component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
