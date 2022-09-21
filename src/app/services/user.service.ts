import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/users/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  users=[
    {
      "id": 1,
      "name": {
        "firstname": "john",
        "lastname": "doe"
      },
      "username": "johnd",
      "password": "m38rmF$",
      "address": {
        "geolocation": {
          "lat": "-37.3159",
          "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
      },
      "email": "john@gmail.com",
      "phone": "1-570-236-7033",
      "image":"./assets/man1.png"
    },
    {
      
      "id": 2,
      "name": {
        "firstname": "david",
        "lastname": "morrison"
      },
      "username": "mor_2314",
      "password": "83r5^_",
      
      "address": {
        "geolocation": {
          "lat": "-37.3159",
          "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "Lovers Ln",
        "number": 7267,
        "zipcode": "12926-3874"
      },
      "email": "morrison@gmail.com",
      "phone": "1-570-236-7033",
      "image":"./assets/man2.png"
      
    },
    {
     
      "id": 3,
      "name": {
        "firstname": "kevin",
        "lastname": "ryan"
      },
      "username": "kevinryan",
      "password": "kev02937@",
      "address": {
        "geolocation": {
          "lat": "40.3467",
          "long": "-30.1310"
        },
        "city": "Cullman",
        "street": "Frances Ct",
        "number": 86,
        "zipcode": "29567-1452"
      },
      "email": "kevin@gmail.com",
      "phone": "1-567-094-1345",
      "image":"./assets/man3.png"
       
    },
    {
      
      "id": 4,
      "name": {
        "firstname": "don",
        "lastname": "romer"
      },
      "username": "donero",
      "password": "ewedon",
      "address": {
        "geolocation": {
          "lat": "50.3467",
          "long": "-20.1310"
        },
        "city": "San Antonio",
        "street": "Hunters Creek Dr",
        "number": 6454,
        "zipcode": "98234-1734"
      },
      "email": "don@gmail.com",
      "phone": "1-765-789-6734",
      "image":"./assets/man4.png"
    },
    {
      
      "id": 5,
      "name": {
        "firstname": "derek",
        "lastname": "powell"
      },
     "username": "derek",
      "password": "jklg*_56",
      "address": {
        "geolocation": {
          "lat": "40.3467",
          "long": "-40.1310"
        },
        "city": "san Antonio",
        "street": "adams St",
        "number": 245,
        "zipcode": "80796-1234"
      },
      "email": "derek@gmail.com",
      "phone": "1-956-001-1945",
      "image":"./assets/man5.png"
     
    },
    {
       "id": 6,
       "name": {
        "firstname": "david",
        "lastname": "russell"
      },
      "username": "david_r",
      "password": "3478*#54",
      "address": {
        "geolocation": {
          "lat": "20.1677",
          "long": "-10.6789"
        },
        "city": "el paso",
        "street": "prospect st",
        "number": 124,
        "zipcode": "12346-0456"
      },
      "email": "david_r@gmail.com",
      "phone": "1-678-345-9856",
      "image":"./assets/man4.png"
      
    },
    {
      
      "id": 7,
      "name": {
        "firstname": "miriam",
        "lastname": "snyder"
      },
      "username": "snyder",
      "password": "f238&@*$",
      "address": {
        "geolocation": {
          "lat": "10.3456",
          "long": "20.6419"
        },
        "city": "fresno",
        "street": "saddle st",
        "number": 1342,
        "zipcode": "96378-0245"
      },
      "email": "miriam@gmail.com",
      "phone": "1-123-943-0563",
      "image":"./assets/man5.png"
    },
    {
      
      "id": 8,
      "name": {
        "firstname": "william",
        "lastname": "hopkins"
      },
      "username": "hopkins",
      "password": "William56$hj",
      "address": {
        "geolocation": {
          "lat": "50.3456",
          "long": "10.6419"
        },
        "city": "mesa",
        "street": "vally view ln",
        "number": 1342,
        "zipcode": "96378-0245"
      },
      "email": "william@gmail.com",
      "phone": "1-478-001-0890",
      "image":"./assets/man2.png"
      
    },
    {
      
      "id": 9,
      "name": {
        "firstname": "kate",
        "lastname": "hale"
      },
     
      "username": "kate_h",
      "password": "kfejk@*_",
      "address": {
        "geolocation": {
          "lat": "40.12456",
          "long": "20.5419"
        },
        "city": "miami",
        "street": "avondale ave",
        "number": 345,
        "zipcode": "96378-0245"
      },
      "email": "kate@gmail.com",
      "phone": "1-678-456-1934",
      "image":"./assets/man3.png"
      
    },
    {
      
      "id": 10,
      "name": {
        "firstname": "jimmie",
        "lastname": "klein"
      },
      "username": "jimmie_k",
      "password": "klein*#%*",
      "address": {
        "geolocation": {
          "lat": "30.24788",
          "long": "-20.545419"
        },
        "city": "fort wayne",
        "street": "oak lawn ave",
        "number": 526,
        "zipcode": "10256-4532"
      },
      "email": "jimmie@gmail.com",
      "phone": "1-104-001-4567",
      "image":"./assets/man1.png"
       
    },
  ]
  
  getUsers(){
  return this.users
  }


  login(email:string,pwd:string){
    return new Observable(Subscriber=>{
      
     this.http.get("http://localhost:3000/users").subscribe(users=>{
        
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
}
