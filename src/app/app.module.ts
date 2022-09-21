import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { ProductlistComponent } from './components/products/productlist/productlist.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { ProductComponent } from './components/products/product/product.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { OrderComponent } from './components/order/order/order.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { BooksComponent } from './components/books/books/books.component';
import { BookComponent } from './components/books/book/book.component';
import { AddbookComponent } from './components/books/addbook/addbook.component';
import { EditbookComponent } from './components/books/editbook/editbook.component';
import { AddproductComponent } from './components/products/addproduct/addproduct.component';
import { CounterComponent } from './components/products/counter/counter.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { FlashMessageComponent } from './components/common/flash-message/flash-message.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    ProductlistComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    UserComponent,
    ProductComponent,
    OrdersComponent,
    OrderComponent,
    AdduserComponent,
    BooksComponent,
    BookComponent,
    AddbookComponent,
    EditbookComponent,
    AddproductComponent,
    CounterComponent,
    LoginComponent,
    SignupComponent,
    FlashMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
